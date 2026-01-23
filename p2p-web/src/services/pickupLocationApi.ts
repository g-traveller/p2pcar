import { ApiResponse } from '@/types/api';

export interface PickupLocation {
  id: number;
  name: string;
  address: string;
  district?: string;
  city: string;
  latitude?: number;
  longitude?: number;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const BASE_URL = `${API_BASE_URL}/api/v1`;

export class PickupLocationApi {
  private static baseUrl = `${BASE_URL}/locations`;

  static async getActiveLocations(): Promise<ApiResponse<PickupLocation[]>> {
    const response = await fetch(`${this.baseUrl}/active`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }

    return response.json();
  }

  static async getAllLocations(): Promise<ApiResponse<PickupLocation[]>> {
    const response = await fetch(this.baseUrl, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }

    return response.json();
  }

  static async getLocationsByCity(city: string): Promise<ApiResponse<PickupLocation[]>> {
    const response = await fetch(`${this.baseUrl}/city/${encodeURIComponent(city)}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }

    return response.json();
  }

  private static async extractErrorData(response: Response): Promise<never> {
    let errorData: any = {
      code: response.status,
      message: `HTTP error! status: ${response.status}`,
      response: {
        status: response.status,
        data: null
      }
    };

    try {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const json = await response.json();
        errorData = {
          ...errorData,
          ...json,
          response: {
            ...errorData.response,
            data: json
          }
        };
      } else {
        const text = await response.text();
        errorData.message = text || errorData.message;
      }
    } catch (e) {
      // If parsing fails, use default error data
    }

    const error = new Error(errorData.message || 'Request failed') as any;
    error.response = errorData.response;
    error.code = errorData.code;
    throw error;
  }
}

export const getActiveLocations = () => PickupLocationApi.getActiveLocations();
export const getAllLocations = () => PickupLocationApi.getAllLocations();
export const getLocationsByCity = (city: string) => PickupLocationApi.getLocationsByCity(city);

export default PickupLocationApi;
