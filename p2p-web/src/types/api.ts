// API Response wrapper
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: number;
}

// Pagination response
export interface PageResponse<T> {
  total: number;
  items: T[];
  page: number;
  size: number;
  totalPages: number;
}

// Host information from backend
export interface HostInfo {
  id: number;
  name: string;
  avatar: string | null;
  trips: number;
  rating: number;
  isSuperHost: boolean;
}

// Vehicle response from backend
export interface VehicleResponse {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number | null;
  color: string | null;
  image: string | null;
  images: string[];
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  seats: number;
  transmission: string;
  fuel: string;
  description: string | null;
  instantBook: boolean;
  host: HostInfo | null;
  badges: string[];
  status: string;
  createdAt: string;
}

// Vehicle interface for frontend (transformed from backend response)
export interface Vehicle {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  seats: number;
  transmission: string;
  fuel: string;
  hostName: string;
  hostInitial: string;
  trips: number;
  price: number;
  badges: string[];
}

// Auth interfaces
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    avatar?: string;
    phone?: string;
  };
}

export interface RegisterRequest {
  email?: string;
  phone?: string;
  password: string;
  name: string;
  verificationCode: string;
}

export interface SendVerificationCodeRequest {
  type: 'phone' | 'email';
  phone?: string;
  email?: string;
}

export interface SendVerificationCodeResponse {
  message: string;
  expiresAt: number;
}

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
}
