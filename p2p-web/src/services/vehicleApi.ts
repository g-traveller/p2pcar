import { ApiResponse, PageResponse, VehicleResponse, Vehicle } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1';

/**
 * Transform backend VehicleResponse to frontend Vehicle interface
 */
function transformVehicleResponse(response: VehicleResponse): Vehicle {
  // Get host initial from host name (first character)
  const hostName = response.host?.name || '车主';
  const hostInitial = hostName.charAt(0);

  // Build badges list from backend data
  const badges: string[] = [];
  if (response.host?.isSuperHost) {
    badges.push('超级车主');
  }
  if (response.instantBook) {
    badges.push('即时预订');
  }

  // Use first image from images array or fallback to image field
  const imageUrl = response.images && response.images.length > 0
    ? response.images[0]
    : response.image || 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop';

  return {
    id: response.id,
    name: response.name,
    image: imageUrl,
    rating: Number(response.rating) || 0,
    reviewCount: response.reviewCount || 0,
    location: response.location,
    seats: response.seats,
    transmission: response.transmission === 'AUTOMATIC' ? '自动' : '手动',
    fuel: getFuelTypeLabel(response.fuel),
    hostName,
    hostInitial,
    trips: response.host?.trips || 0,
    price: Number(response.price) || 0,
    badges
  };
}

/**
 * Map backend fuel type to Chinese label
 */
function getFuelTypeLabel(fuelType: string): string {
  const fuelMap: Record<string, string> = {
    'PETROL': '汽油',
    'ELECTRIC': '电动',
    'HYBRID': '混合',
    'DIESEL': '柴油'
  };
  return fuelMap[fuelType] || fuelType;
}

/**
 * Search vehicles with optional filters
 */
export async function searchVehicles(params?: {
  location?: string;
  startDate?: string;
  endDate?: string;
  vehicleType?: string;
  minPrice?: number;
  maxPrice?: number;
  seats?: number | number[];
  transmission?: string;
  fuelType?: string | string[];
  brand?: string;
  sortBy?: string;
  page?: number;
  size?: number;
}): Promise<{ vehicles: Vehicle[]; total: number; totalPages: number }> {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams();

    if (params?.location) queryParams.append('location', params.location);
    if (params?.startDate) queryParams.append('startDate', params.startDate);
    if (params?.endDate) queryParams.append('endDate', params.endDate);
    if (params?.vehicleType) queryParams.append('vehicleType', params.vehicleType);
    if (params?.minPrice !== undefined) queryParams.append('minPrice', params.minPrice.toString());
    if (params?.maxPrice !== undefined) queryParams.append('maxPrice', params.maxPrice.toString());

    // Handle array parameters for seats
    if (params?.seats !== undefined) {
      if (Array.isArray(params.seats)) {
        params.seats.forEach(seat => queryParams.append('seats', seat.toString()));
      } else {
        queryParams.append('seats', params.seats.toString());
      }
    }

    if (params?.transmission) queryParams.append('transmission', params.transmission);

    // Handle array parameters for fuelType
    if (params?.fuelType !== undefined) {
      if (Array.isArray(params.fuelType)) {
        params.fuelType.forEach(fuel => {
          // Map Chinese fuel types to backend enum values
          const fuelTypeMap: Record<string, string> = {
            '汽油': 'PETROL',
            '电动': 'ELECTRIC',
            '混动': 'HYBRID'
          };
          const backendFuelType = fuelTypeMap[fuel] || fuel;
          queryParams.append('fuelType', backendFuelType);
        });
      } else {
        queryParams.append('fuelType', params.fuelType);
      }
    }

    if (params?.brand) queryParams.append('brand', params.brand);
    if (params?.sortBy) queryParams.append('sortBy', params.sortBy);
    queryParams.append('page', (params?.page || 0).toString());
    queryParams.append('size', (params?.size || 20).toString());

    const url = `${API_BASE_URL}/vehicles${queryParams.toString() ? '?' + queryParams.toString() : ''}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const apiResponse: ApiResponse<PageResponse<VehicleResponse>> = await response.json();

    if (apiResponse.code !== 200 || !apiResponse.data) {
      throw new Error(apiResponse.message || 'Failed to fetch vehicles');
    }

    const { items, total, totalPages } = apiResponse.data;
    const vehicles = items.map(transformVehicleResponse);

    return { vehicles, total, totalPages };
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
}

/**
 * Get vehicle by ID
 */
export async function getVehicleById(id: number): Promise<Vehicle> {
  try {
    const response = await fetch(`${API_BASE_URL}/vehicles/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const apiResponse: ApiResponse<VehicleResponse> = await response.json();

    if (apiResponse.code !== 200 || !apiResponse.data) {
      throw new Error(apiResponse.message || 'Failed to fetch vehicle');
    }

    return transformVehicleResponse(apiResponse.data);
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    throw error;
  }
}

/**
 * Get distinct locations
 */
export async function getLocations(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/vehicles/search/locations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const apiResponse: ApiResponse<string[]> = await response.json();

    if (apiResponse.code !== 200 || !apiResponse.data) {
      throw new Error(apiResponse.message || 'Failed to fetch locations');
    }

    return apiResponse.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
}
