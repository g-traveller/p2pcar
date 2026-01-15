# P2P Car Rental - Test Data Mapping Guide

## Database to Frontend Field Mapping

This document shows how the database fields map to the frontend Vehicle interface.

### Frontend Vehicle Interface (`/p2p-web/src/types/api.ts`)

```typescript
export interface Vehicle {
  id: number;
  name: string;              // Combined: brand + model
  image: string;             // Primary image from vehicle_images
  rating: number;            // From vehicles.rating
  reviewCount: number;       // From vehicles.review_count
  location: string;          // From vehicles.location
  seats: number;             // From vehicles.seats
  transmission: string;      // Mapped from vehicles.transmission
  fuel: string;              // Mapped from vehicles.fuel_type
  hostName: string;          // From users.name (join via owner_id)
  hostInitial: string;       // First character of host name
  trips: number;             // From vehicles.total_trips
  price: number;             // From vehicles.price_per_day
  badges: string[];          // Computed from is_super_host, instant_book
}
```

### Backend VehicleResponse Interface

```typescript
export interface VehicleResponse {
  id: number;                    // vehicles.id
  name: string;                  // vehicles.brand + ' ' + vehicles.model
  brand: string;                 // vehicles.brand
  model: string;                 // vehicles.model
  year: number | null;           // vehicles.year
  color: string | null;          // vehicles.color
  image: string | null;          // Primary image URL
  images: string[];              // All image URLs
  price: number;                 // vehicles.price_per_day
  rating: number;                // vehicles.rating
  reviewCount: number;           // vehicles.review_count
  location: string;              // vehicles.location
  seats: number;                 // vehicles.seats
  transmission: string;          // vehicles.transmission
  fuel: string;                  // vehicles.fuel_type (mapped)
  description: string | null;    // vehicles.description
  instantBook: boolean;          // vehicles.instant_book
  host: HostInfo | null;         // Joined from users table
  badges: string[];              // Computed badges
  status: string;                // vehicles.status
  createdAt: string;             // vehicles.created_at
}
```

### Badge Generation Logic

Badges are computed based on vehicle properties:

```kotlin
val badges = mutableListOf<String>()

if (vehicle.isSuperHost) {
    badges.add("超级车主")
}

if (vehicle.instantBook) {
    badges.add("即时预订")
}

// Additional badges could be added based on:
// - Review count (e.g., "百次行程" for 100+ trips)
// - Rating (e.g., "五星好评" for 5.0 rating)
// - Vehicle type (e.g., "新车" for vehicles < 1 year old)
```

### Transmission Mapping

Database value → Frontend display:

```
AUTOMATIC → "自动"
MANUAL    → "手动"
```

### Fuel Type Mapping

Database value → Frontend display:

```
PETROL   → "汽油"
ELECTRIC → "电动"
HYBRID   → "混合动力"
DIESEL   → "柴油"
```

### Host Initial Calculation

```kotlin
val hostInitial = user.name.first().toString()
// Examples:
// "张伟" → "张"
// "李明" → "李"
// "王芳" → "王"
```

## Example: Vehicle 1 (Tesla Model 3)

### Database Records

**users table:**
```
id: 1
name: "张伟"
phone: "13800138001"
avatar: "https://i.pravatar.cc/150?u=zhang"
```

**vehicles table:**
```
id: 1
owner_id: 1
brand: "Tesla"
model: "Model 3"
year: 2023
color: "珍珠白"
seats: 5
transmission: "AUTOMATIC"
fuel_type: "ELECTRIC"
price_per_day: 398.00
location: "北京市朝阳区望京SOHO"
rating: 4.92
review_count: 156
total_trips: 156
is_super_host: true
instant_book: true
```

**vehicle_images table:**
```
vehicle_id: 1
url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80"
is_primary: true
```

### Frontend Vehicle Object

```typescript
{
  id: 1,
  name: "Tesla Model 3",
  image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
  rating: 4.92,
  reviewCount: 156,
  location: "北京市朝阳区望京SOHO",
  seats: 5,
  transmission: "自动",
  fuel: "电动",
  hostName: "张伟",
  hostInitial: "张",
  trips: 156,
  price: 398,
  badges: ["超级车主", "即时预订"]
}
```

## API Endpoint Usage

### Get All Vehicles

```bash
GET /api/vehicles
```

Response:
```json
{
  "code": 200,
  "message": "Success",
  "data": {
    "total": 12,
    "items": [/* VehicleResponse objects */],
    "page": 0,
    "size": 20,
    "totalPages": 1
  }
}
```

### Get Vehicle by ID

```bash
GET /api/vehicles/1
```

Response:
```json
{
  "code": 200,
  "message": "Success",
  "data": {
    "id": 1,
    "name": "Tesla Model 3",
    "brand": "Tesla",
    "model": "Model 3",
    "price": 398.00,
    "rating": 4.92,
    "reviewCount": 156,
    "location": "北京市朝阳区望京SOHO",
    "seats": 5,
    "transmission": "自动",
    "fuel": "电动",
    "instantBook": true,
    "host": {
      "id": 1,
      "name": "张伟",
      "avatar": "https://i.pravatar.cc/150?u=zhang",
      "trips": 156,
      "rating": 4.92,
      "isSuperHost": true
    },
    "badges": ["超级车主", "即时预订"],
    "status": "AVAILABLE",
    "images": ["https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80", ...]
  }
}
```

## SQL Queries for Testing

### Get Vehicles with Host Information

```sql
SELECT
    v.id,
    v.brand || ' ' || v.model as name,
    v.location,
    v.seats,
    v.transmission,
    v.fuel_type,
    v.price_per_day,
    v.rating,
    v.review_count,
    u.name as host_name,
    LEFT(u.name, 1) as host_initial,
    v.total_trips,
    v.is_super_host,
    v.instant_book
FROM vehicles v
JOIN users u ON v.owner_id = u.id
ORDER BY v.id;
```

### Get Vehicles with Primary Image

```sql
SELECT
    v.id,
    v.brand || ' ' || v.model as name,
    v.location,
    v.seats,
    v.transmission,
    v.fuel_type,
    v.price_per_day,
    v.rating,
    v.review_count,
    u.name as host_name,
    vi.url as image
FROM vehicles v
JOIN users u ON v.owner_id = u.id
LEFT JOIN vehicle_images vi ON v.id = vi.vehicle_id AND vi.is_primary = true
ORDER BY v.id;
```

### Search Vehicles by Location

```sql
SELECT
    v.id,
    v.brand || ' ' || v.model as name,
    v.location,
    v.price_per_day,
    v.rating
FROM vehicles v
WHERE v.location LIKE '%北京%'
ORDER BY v.rating DESC;
```

## Data Consistency Checks

### Verify All Vehicles Have Primary Images

```sql
SELECT
    v.id,
    v.brand || ' ' || v.model as vehicle,
    COUNT(vi.id) as total_images,
    COUNT(vi.id) FILTER (WHERE vi.is_primary = true) as primary_images
FROM vehicles v
LEFT JOIN vehicle_images vi ON v.id = vi.vehicle_id
GROUP BY v.id, v.brand, v.model
HAVING COUNT(vi.id) FILTER (WHERE vi.is_primary = true) = 0;
```

Expected: Empty result (all vehicles should have primary images)

### Verify All Vehicles Have Owners

```sql
SELECT
    v.id,
    v.brand || ' ' || v.model as vehicle,
    v.owner_id
FROM vehicles v
LEFT JOIN users u ON v.owner_id = u.id
WHERE u.id IS NULL;
```

Expected: Empty result (all vehicles should have valid owners)

### Verify Rating Distribution

```sql
SELECT
    CASE
        WHEN rating >= 4.9 THEN '4.9 - 5.0'
        WHEN rating >= 4.8 THEN '4.8 - 4.89'
        WHEN rating >= 4.7 THEN '4.7 - 4.79'
        ELSE 'Below 4.7'
    END as rating_range,
    COUNT(*) as vehicle_count,
    ROUND(AVG(price_per_day), 2) as avg_price
FROM vehicles
GROUP BY rating_range
ORDER BY rating_range DESC;
```

## Performance Considerations

### Indexed Fields

The following fields have indexes for optimal query performance:

- `vehicles.owner_id` - For joining with users
- `vehicles.status` - For filtering by availability
- `vehicles.location` - For location-based searches
- `vehicles.price_per_day` - For price range filtering
- `vehicles.rating` - For sorting by rating
- `vehicle_images.vehicle_id` - For joining images

### Query Optimization Tips

1. **Always use indexed fields in WHERE clauses**
   ```sql
   -- Good
   WHERE v.status = 'AVAILABLE' AND v.location LIKE '%北京%'

   -- Avoid
   WHERE LOWER(v.description) LIKE '%豪华%'
   ```

2. **Use JOIN efficiently**
   ```sql
   -- Good (uses index)
   JOIN users u ON v.owner_id = u.id

   -- Avoid (function on indexed column)
   JOIN users u ON CAST(v.owner_id AS VARCHAR) = CAST(u.id AS VARCHAR)
   ```

3. **Limit results for pagination**
   ```sql
   SELECT * FROM vehicles
   ORDER BY v.rating DESC
   LIMIT 20 OFFSET 0;
   ```

## Summary

- **12 vehicles** with diverse types and price ranges
- **6 users** (5 owners, 1 renter)
- **33 vehicle images** (2-3 per vehicle)
- **All vehicles** have primary images set
- **All vehicles** have valid owner relationships
- **Rating range**: 4.68 - 5.00 stars
- **Price range**: ¥198 - ¥1,888 per day
- **Locations**: Beijing, Shanghai, Guangzhou, Hangzhou, Suzhou, Shenzhen

The test data is comprehensive and ready for frontend integration and API testing.
