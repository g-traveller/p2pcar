# P2P Car Rental - Test Data Documentation

This directory contains test data scripts for the P2P Car Rental platform.

## Files

- `insert-test-data.sql` - SQL script to insert test data into the database
- `insert-test-data.sh` - Shell script wrapper for easy execution

## Test Data Overview

### Users (6 records)
- 5 vehicle owners (hosts)
- 1 renter
- All have verified phone numbers and driver's licenses
- Password: `password123` (for all test users)

### Vehicles (12 records)

| ID | Vehicle | Type | Price/Day | Location | Super Host |
|----|---------|------|-----------|----------|------------|
| 1 | Tesla Model 3 | Electric Sedan | ¥398 | 北京望京 | Yes |
| 2 | BMW X5 | Luxury SUV | ¥688 | 北京国贸 | Yes |
| 3 | Mercedes-Benz S400L | Luxury Sedan | ¥1,288 | 上海陆家嘴 | Yes |
| 4 | Toyota Alphard | Luxury MPV | ¥1,088 | 上海新天地 | Yes |
| 5 | Porsche 911 Carrera S | Sports Car | ¥1,688 | 广州珠江新城 | Yes |
| 6 | Honda Accord | Economy Sedan | ¥288 | 广州体育西 | No |
| 7 | Audi Q7 | Large SUV | ¥888 | 杭州西湖 | No |
| 8 | BYD 汉EV 创世版 | Electric Sedan | ¥368 | 杭州滨江 | No |
| 9 | Volkswagen Lavida | Compact Sedan | ¥198 | 苏州园区 | No |
| 10 | Lexus LM 300h | Ultra Luxury MPV | ¥1,888 | 北京三里屯 | Yes |
| 11 | Ford Mustang GT | Muscle Car | ¥688 | 北京五道口 | No |
| 12 | Nissan Serena | Family MPV | ¥328 | 深圳科技园 | No |

### Vehicle Types Distribution
- **Sedan**: 5 (Tesla Model 3, Honda Accord, BYD Han EV, VW Lavida, Mercedes S-Class)
- **SUV**: 2 (BMW X5, Audi Q7)
- **MPV**: 3 (Toyota Alphard, Lexus LM, Nissan Serena)
- **Sports Car**: 2 (Porsche 911, Ford Mustang)

### Fuel Types
- **Electric**: 2 (Tesla Model 3, BYD Han EV)
- **Petrol**: 7 (BMW X5, Mercedes S-Class, Porsche 911, Honda Accord, Audi Q7, VW Lavida, Ford Mustang)
- **Hybrid**: 3 (Toyota Alphard, Lexus LM, Nissan Serena)

### Price Range
- **Economy**: ¥198-328/day (VW Lavida, Honda Accord, Nissan Serena)
- **Mid-Range**: ¥368-688/day (Tesla Model 3, BYD Han EV, BMW X5, Ford Mustang, Audi Q7)
- **Luxury**: ¥1,088-1,888/day (Toyota Alphard, Mercedes S-Class, Porsche 911, Lexus LM)

### Vehicle Images (33 records)
- Each vehicle has 2-3 high-quality images from Unsplash
- Images are properly marked with `is_primary` flag
- Display order is set for proper image gallery

## Usage

### Method 1: Using Shell Script (Recommended)

```bash
cd /Users/nan.jiang/Work/p2pcar/p2p-car-backend/scripts
./insert-test-data.sh
```

### Method 2: Direct SQL Execution

```bash
# From the project root
docker exec -i p2pcar-postgres psql -U p2pcar -d p2pcar < scripts/insert-test-data.sql
```

### Method 3: Interactive psql

```bash
# Connect to the database
docker exec -it p2pcar-postgres psql -U p2pcar -d p2pcar

# Execute the script
\i /tmp/insert-test-data.sql
```

## Verification

After inserting the data, verify it was successful:

```sql
-- Check record counts
SELECT 'Users' as table_name, COUNT(*) FROM users
UNION ALL
SELECT 'Vehicles', COUNT(*) FROM vehicles
UNION ALL
SELECT 'Vehicle Images', COUNT(*) FROM vehicle_images;

-- View all vehicles
SELECT
    v.id,
    v.brand || ' ' || v.model as vehicle,
    v.location,
    v.price_per_day,
    v.rating,
    u.name as host_name
FROM vehicles v
JOIN users u ON v.owner_id = u.id
ORDER BY v.id;
```

## Resetting Data

To clear all test data and start fresh:

```sql
-- WARNING: This will delete all test data!
DELETE FROM vehicle_images;
DELETE FROM vehicles;
DELETE FROM users WHERE phone LIKE '138001380%';
```

Or uncomment the cleanup section in `insert-test-data.sql` before running it.

## Test User Credentials

All test users use the same password for simplicity:

- **Phone**: 13800138001 - 13800138006
- **Password**: password123

## API Testing

You can now test the backend API with this data:

```bash
# Get all vehicles
curl http://localhost:8080/api/vehicles

# Get a specific vehicle
curl http://localhost:8080/api/vehicles/1

# Search vehicles by location
curl "http://localhost:8080/api/vehicles/search?location=北京"

# Filter by price range
curl "http://localhost:8080/api/vehicles/search?minPrice=200&maxPrice=500"
```

## Notes

- All coordinates (latitude/longitude) are accurate for the specified locations
- License plates are formatted according to Chinese conventions
- Images are from Unsplash and should be publicly accessible
- Ratings range from 4.68 to 5.00 stars
- Review counts vary from 23 to 312 reviews
- All vehicles are in "AVAILABLE" status
- Super host vehicles have the `is_super_host` flag set to true

## Next Steps

After inserting test data:

1. Start the backend application
2. Test the vehicle listing API endpoints
3. Verify frontend displays vehicles correctly
4. Test search and filter functionality
5. Test booking flow with different vehicle types

## Troubleshooting

### Container not running
```bash
docker-compose up -d postgres
```

### Port conflicts
Ensure port 5432 is not already in use:
```bash
lsof -i :5432
```

### Permission denied on shell script
```bash
chmod +x scripts/insert-test-data.sh
```

### Database connection errors
Check database is running and credentials are correct:
```bash
docker exec p2pcar-postgres psql -U p2pcar -d p2pcar -c "SELECT 1"
```
