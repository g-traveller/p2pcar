/**
 * Test script to verify vehicle API integration
 * Run with: npm test src/__tests__/api/vehicleApi.test.ts
 */

import { searchVehicles, getVehicleById, getLocations } from '@/services/vehicleApi';

// Mock fetch for testing
global.fetch = jest.fn();

describe('Vehicle API Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('searchVehicles', () => {
    it('should fetch vehicles successfully', async () => {
      const mockResponse = {
        code: 200,
        message: 'success',
        data: {
          total: 2,
          items: [
            {
              id: 1,
              name: '奔驰 S级',
              brand: '奔驰',
              model: 'S级',
              year: 2023,
              color: '黑色',
              image: 'https://example.com/image1.jpg',
              images: ['https://example.com/image1.jpg'],
              price: 888.00,
              rating: 4.9,
              reviewCount: 128,
              location: '北京市朝阳区',
              seats: 5,
              transmission: 'AUTOMATIC',
              fuel: 'PETROL',
              description: '豪华轿车',
              instantBook: true,
              host: {
                id: 1,
                name: '李先生',
                avatar: null,
                trips: 256,
                rating: 4.8,
                isSuperHost: true
              },
              badges: [],
              status: 'AVAILABLE',
              createdAt: '2024-01-01T00:00:00'
            },
            {
              id: 2,
              name: '宝马 X5',
              brand: '宝马',
              model: 'X5',
              year: 2023,
              color: '白色',
              image: 'https://example.com/image2.jpg',
              images: ['https://example.com/image2.jpg'],
              price: 680.00,
              rating: 4.8,
              reviewCount: 95,
              location: '上海市浦东新区',
              seats: 5,
              transmission: 'AUTOMATIC',
              fuel: 'PETROL',
              description: '豪华SUV',
              instantBook: true,
              host: {
                id: 2,
                name: '王女士',
                avatar: null,
                trips: 189,
                rating: 4.9,
                isSuperHost: false
              },
              badges: [],
              status: 'AVAILABLE',
              createdAt: '2024-01-01T00:00:00'
            }
          ],
          page: 0,
          size: 20,
          totalPages: 1
        },
        timestamp: Date.now()
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      const result = await searchVehicles();

      expect(result.vehicles).toHaveLength(2);
      expect(result.total).toBe(2);
      expect(result.vehicles[0]).toMatchObject({
        id: 1,
        name: '奔驰 S级',
        transmission: '自动',
        fuel: '汽油',
        badges: ['超级车主', '即时预订']
      });
    });

    it('should handle API errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error'
      });

      await expect(searchVehicles()).rejects.toThrow('API error: 500 Internal Server Error');
    });

    it('should send correct query parameters', async () => {
      const mockResponse = {
        code: 200,
        message: 'success',
        data: {
          total: 0,
          items: [],
          page: 0,
          size: 20,
          totalPages: 0
        },
        timestamp: Date.now()
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      await searchVehicles({
        location: '北京市',
        minPrice: 100,
        maxPrice: 1000,
        sortBy: 'price_asc'
      });

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('location=北京市'),
        expect.any(Object)
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('minPrice=100'),
        expect.any(Object)
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('maxPrice=1000'),
        expect.any(Object)
      );
    });
  });

  describe('getVehicleById', () => {
    it('should fetch a single vehicle by ID', async () => {
      const mockResponse = {
        code: 200,
        message: 'success',
        data: {
          id: 1,
          name: '奔驰 S级',
          brand: '奔驰',
          model: 'S级',
          year: 2023,
          color: '黑色',
          image: 'https://example.com/image1.jpg',
          images: ['https://example.com/image1.jpg'],
          price: 888.00,
          rating: 4.9,
          reviewCount: 128,
          location: '北京市朝阳区',
          seats: 5,
          transmission: 'AUTOMATIC',
          fuel: 'PETROL',
          description: '豪华轿车',
          instantBook: true,
          host: {
            id: 1,
            name: '李先生',
            avatar: null,
            trips: 256,
            rating: 4.8,
            isSuperHost: true
          },
          badges: [],
          status: 'AVAILABLE',
          createdAt: '2024-01-01T00:00:00'
        },
        timestamp: Date.now()
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      const vehicle = await getVehicleById(1);

      expect(vehicle).toMatchObject({
        id: 1,
        name: '奔驰 S级',
        price: 888,
        hostName: '李先生',
        hostInitial: '李'
      });
    });
  });

  describe('getLocations', () => {
    it('should fetch distinct locations', async () => {
      const mockResponse = {
        code: 200,
        message: 'success',
        data: ['北京市朝阳区', '上海市浦东新区', '深圳市南山区'],
        timestamp: Date.now()
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      const locations = await getLocations();

      expect(locations).toEqual(['北京市朝阳区', '上海市浦东新区', '深圳市南山区']);
    });
  });
});
