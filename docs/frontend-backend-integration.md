# Frontend-Backend Integration Guide

## Overview

This document describes the integration between the Next.js frontend (`p2p-web/`) and the Spring Boot backend (`p2p-car-backend/`).

## API Endpoint

The backend API is available at:
```
http://localhost:8080/api/v1
```

## Frontend Configuration

### Environment Variables

The frontend uses the following environment variable:

- `NEXT_PUBLIC_API_BASE_URL`: Backend API base URL (default: `http://localhost:8080/api/v1`)

Configure this in `p2p-web/.env.local`:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1
```

## API Integration

### Vehicle Service

The vehicle API service is located at:
```
p2p-web/src/services/vehicleApi.ts
```

#### Available Functions

1. **searchVehicles(params?)** - Search and filter vehicles
   - Parameters:
     - `location?: string` - Filter by location
     - `startDate?: string` - Filter by start date (ISO format)
     - `endDate?: string` - Filter by end date (ISO format)
     - `minPrice?: number` - Minimum price per day
     - `maxPrice?: number` - Maximum price per day
     - `seats?: number` - Number of seats
     - `transmission?: string` - Transmission type (AUTOMATIC/MANUAL)
     - `fuelType?: string` - Fuel type (PETROL/ELECTRIC/HYBRID/DIESEL)
     - `brand?: string` - Vehicle brand
     - `sortBy?: string` - Sort option (rating_desc, price_asc, price_desc)
     - `page?: number` - Page number (default: 0)
     - `size?: number` - Page size (default: 20)
   - Returns: `{ vehicles: Vehicle[], total: number, totalPages: number }`

2. **getVehicleById(id)** - Get a single vehicle by ID
   - Parameters: `id: number`
   - Returns: `Vehicle`

3. **getLocations()** - Get all distinct locations
   - Returns: `string[]`

### Data Transformation

The frontend transforms backend `VehicleResponse` to frontend `Vehicle` interface:

**Backend Response (`VehicleResponse`)**:
```typescript
{
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number | null;
  color: string | null;
  image: string | null;
  images: string[];
  price: BigDecimal;
  rating: BigDecimal;
  reviewCount: number;
  location: string;
  seats: number;
  transmission: string;  // "AUTOMATIC" | "MANUAL"
  fuel: string;          // "PETROL" | "ELECTRIC" | "HYBRID" | "DIESEL"
  description: string | null;
  instantBook: boolean;
  host: HostInfo | null;
  badges: string[];
  status: string;
  createdAt: LocalDateTime;
}
```

**Frontend Model (`Vehicle`)**:
```typescript
{
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  seats: number;
  transmission: string;  // "自动" | "手动"
  fuel: string;          // "汽油" | "电动" | "混合" | "柴油"
  hostName: string;
  hostInitial: string;
  trips: number;
  price: number;
  badges: string[];      // ["超级车主", "即时预订"]
}
```

### Transformation Logic

The `transformVehicleResponse()` function in `vehicleApi.ts` handles:

1. **Host Information**: Extracts host name and creates initial from first character
2. **Badges**: Converts backend flags to frontend badge labels:
   - `host.isSuperHost` → "超级车主"
   - `instantBook` → "即时预订"
3. **Transmission**: Converts enum to Chinese label:
   - "AUTOMATIC" → "自动"
   - "MANUAL" → "手动"
4. **Fuel Type**: Converts enum to Chinese label:
   - "PETROL" → "汽油"
   - "ELECTRIC" → "电动"
   - "HYBRID" → "混合"
   - "DIESEL" → "柴油"
5. **Image**: Uses first image from `images` array, falls back to `image` field
6. **Price/Rating**: Converts BigDecimal to number

## Component Integration

### VehicleGrid Component

Located at: `p2p-web/src/components/VehicleGrid.tsx`

**Features**:
- Client-side component with React hooks
- Fetches vehicles from API on mount and sort change
- Displays loading state with spinner
- Displays error state with retry button
- Displays empty state when no vehicles found
- Supports sort options: Recommended, Price (Low/High), Rating
- Shows total vehicle count

**State Management**:
```typescript
const [vehicles, setVehicles] = useState<Vehicle[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [total, setTotal] = useState(0);
const [sortBy, setSortBy] = useState<SortOption>('recommended');
```

### VehicleCard Component

Located at: `p2p-web/src/components/VehicleCard.tsx`

**Uses**: `Vehicle` interface from `@/types/api`

## Type Definitions

All type definitions are in: `p2p-web/src/types/api.ts`

- `ApiResponse<T>` - Backend API wrapper
- `PageResponse<T>` - Pagination response
- `HostInfo` - Host information
- `VehicleResponse` - Backend vehicle model
- `Vehicle` - Frontend vehicle model

## Testing the Integration

### 1. Start the Backend

```bash
cd p2p-car-backend
./gradlew bootRun
```

Backend will start on `http://localhost:8080`

### 2. Start the Frontend

```bash
cd p2p-web
npm run dev
```

Frontend will start on `http://localhost:3000`

### 3. Test the API

Test the backend API directly:
```bash
# Get all vehicles
curl http://localhost:8080/api/v1/vehicles

# Get vehicles with filters
curl "http://localhost:8080/api/v1/vehicles?location=北京市朝阳区&minPrice=100&maxPrice=1000"

# Get distinct locations
curl http://localhost:8080/api/v1/vehicles/search/locations
```

### 4. Verify Frontend

1. Open `http://localhost:3000` in browser
2. Check browser console for any API errors
3. Verify vehicles are displayed from backend
4. Test sort functionality
5. Test loading/error states

## Error Handling

### API Errors

The frontend handles:
- Network errors (connection refused, timeout)
- HTTP errors (404, 500, etc.)
- API response errors (code !== 200)

All errors are caught and displayed to user with retry option.

### Console Logging

Errors are logged to console:
```javascript
console.error('Failed to fetch vehicles:', error);
```

## CORS Configuration

The backend must allow CORS requests from the frontend. Ensure your Spring Boot configuration includes:

```kotlin
// In SecurityConfig or WebConfig
@Bean
fun corsConfigurationSource(): CorsConfigurationSource {
    val configuration = CorsConfiguration()
    configuration.allowedOrigins = listOf("http://localhost:3000")
    configuration.allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")
    configuration.allowedHeaders = listOf("*")
    configuration.allowCredentials = true

    val source = UrlBasedCorsConfigurationSource()
    source.registerCorsConfiguration("/**", configuration)
    return source
}
```

## Troubleshooting

### Issue: "Failed to fetch" error

**Possible causes**:
1. Backend not running
2. Wrong API URL in `.env.local`
3. CORS not configured on backend
4. Network/firewall issues

**Solutions**:
1. Verify backend is running: `curl http://localhost:8080/api/v1/vehicles`
2. Check `.env.local` exists with correct URL
3. Check browser console for CORS errors
4. Verify backend CORS configuration

### Issue: No vehicles displayed

**Possible causes**:
1. Database has no vehicle data
2. All vehicles have status other than AVAILABLE
3. API response format mismatch

**Solutions**:
1. Add test vehicles to database
2. Check backend logs for SQL queries
3. Verify API response format matches `VehicleResponse`
4. Check browser Network tab for API response

### Issue: Images not loading

**Possible causes**:
1. Image URLs are invalid or inaccessible
2. No images in database (falls back to Unsplash placeholder)

**Solutions**:
1. Verify image URLs are accessible
2. Add image URLs to vehicle records
3. Fallback placeholder will be used automatically

## Next Steps

1. **Add Filtering**: Implement location, price, and other filters in SearchBar component
2. **Add Pagination**: Implement infinite scroll or pagination buttons
3. **Add Vehicle Detail Page**: Create vehicle detail view using `getVehicleById()`
4. **Add Booking Flow**: Implement booking functionality
5. **Add Authentication**: Integrate user authentication
6. **Add Error Boundaries**: Add React error boundaries for better error handling
7. **Add Analytics**: Track API calls and user interactions
8. **Add Caching**: Implement SWR or React Query for data caching
