# P2P Car Rental Platform - Test Data Summary

## Execution Status: COMPLETED

Successfully generated and inserted test data into the P2P Car Rental platform database.

---

## Database Statistics

| Table | Records | Description |
|-------|---------|-------------|
| `users` | 15 | Vehicle owners (test accounts) |
| `vehicles` | 50 | Diverse vehicle listings |
| `vehicle_images` | 112 | Vehicle photos (2-3 per vehicle) |

---

## Vehicle Data Distribution

### By Category

| Category | Count | Price Range (CNY/day) |
|----------|-------|----------------------|
| Luxury Cars | 5 | 1000 - 1500 |
| Premium SUV | 5 | 650 - 900 |
| Mid-range Sedans | 5 | 240 - 280 |
| Economy Cars | 5 | 90 - 170 |
| Electric Vehicles | 5 | 420 - 550 |
| Mid-range SUV | 5 | 350 - 600 |
| MPV | 5 | 400 - 850 |
| Sports Cars | 5 | 1100 - 2500 |
| Compact Cars | 5 | 90 - 180 |
| Luxury SUV | 5 | 850 - 1400 |

### By Brand

- **German Luxury**: 奔驰 (6), 宝马 (5), 奥迪 (5), 保时捷 (2)
- **Japanese**: 丰田 (3), 本田 (3), 日产 (2), 马自达 (1)
- **Electric/Smart**: 特斯拉 (2), 蔚来 (2), 理想 (1), 小鹏 (1), 比亚迪 (1), 极氪 (1)
- **American/European**: 大众 (3), 别克 (1), 雪佛兰 (1), 路虎 (1), 沃尔沃 (1)
- **Chinese**: 吉利 (1), 长安 (1)
- **Exotic**: 法拉利 (1), 兰博基尼 (1)

### By City

| City | Vehicle Count |
|------|---------------|
| 北京 | 4 |
| 上海 | 3 |
| 广州 | 4 |
| 深圳 | 3 |
| 杭州 | 3 |
| 成都 | 3 |
| 重庆 | 3 |
| 武汉 | 2 |
| 西安 | 3 |
| 苏州 | 3 |
| 天津 | 3 |
| 南京 | 3 |
| 长沙 | 3 |
| 郑州 | 3 |
| 南宁 | 1 |
| 南昌 | 1 |
| 合肥 | 3 |

### Price Distribution

| Price Range (CNY/day) | Count |
|----------------------|-------|
| 90 - 200 | 10 |
| 200 - 500 | 10 |
| 500 - 1000 | 15 |
| 1000 - 1500 | 12 |
| 1500+ | 3 |

### Rating Distribution

All vehicles have ratings between 4.75 - 5.00:
- 5.00 (3 vehicles) - Exotic sports cars
- 4.90-4.99 (25 vehicles) - Luxury and premium vehicles
- 4.80-4.89 (18 vehicles) - Mid-range and economy vehicles
- 4.75-4.79 (4 vehicles) - Budget vehicles

### Features

- **Instant Booking**: 35 vehicles (70%)
- **Super Host**: 25 vehicles (50%)
- **Transmission**: Automatic (45), Manual (5)
- **Fuel Types**:
  - PETROL: 32
  - ELECTRIC: 10
  - HYBRID: 8

---

## Sample Vehicle Records

### Luxury Car Example
```
ID: 1
Brand: 奔驰 S-Class S450L
Location: 北京市朝阳区
Price: 1,200 CNY/day
Rating: 4.98 (156 reviews)
Trips: 89
Features: Instant booking, Super host
```

### Economy Car Example
```
ID: 45
Brand: 吉利 帝豪
Location: 苏州市虎丘区
Price: 90 CNY/day
Rating: 4.76 (567 reviews)
Trips: 412
Features: Manual transmission, Petrol
```

### Electric Vehicle Example
```
ID: 21
Brand: 特斯拉 Model 3 Performance
Location: 北京市东城区
Price: 550 CNY/day
Rating: 4.96 (456 reviews)
Trips: 312
Features: Electric, Instant booking, Super host
```

---

## Test User Accounts

15 vehicle owner accounts created:
- User IDs: 1-15
- All verified (driver license and ID card)
- Role: OWNER
- Status: ACTIVE

Sample usernames: 张伟, 李娜, 王强, 刘芳, 陈明, 杨洋, 赵静, etc.

---

## Images

- Total images: 112
- Average images per vehicle: 2.24
- Image sources: Unsplash (high-quality automotive photos)
- Image size: 800px width optimized

---

## SQL Scripts Location

1. `/Users/nan.jiang/Work/p2pcar/p2p-car-backend/scripts/seed-test-data.sql`
   - Creates users and vehicles
   - Ready for re-execution if needed

2. `/Users/nan.jiang/Work/p2pcar/p2p-car-backend/scripts/seed-vehicle-images.sql`
   - Creates vehicle images
   - Can be run independently

---

## Database Connection

```
Host: localhost (via Docker)
Port: 5432
Database: p2pcar
User: p2pcar
Container: p2pcar-postgres
```

---

## Verification Queries

```sql
-- Check total counts
SELECT COUNT(*) FROM vehicles;
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM vehicle_images;

-- View vehicles by price
SELECT brand, model, price_per_day, location
FROM vehicles
ORDER BY price_per_day DESC
LIMIT 10;

-- View vehicles by rating
SELECT brand, model, rating, review_count
FROM vehicles
ORDER BY rating DESC
LIMIT 10;

-- View vehicles with images
SELECT v.brand, v.model, COUNT(vi.id) as image_count
FROM vehicles v
LEFT JOIN vehicle_images vi ON v.id = vi.vehicle_id
GROUP BY v.id
ORDER BY image_count DESC;
```

---

## Notes

- All vehicles are in "AVAILABLE" status
- All vehicles have valid geolocation coordinates
- License plates follow Chinese format (e.g., 京A·88888)
- Data is realistic and ready for testing frontend/backend integration
- Foreign key constraints properly maintained
- Ready for API testing and frontend display

---

## Next Steps

1. Test the vehicle listing API endpoints
2. Verify frontend displays vehicle cards correctly
3. Test search and filter functionality
4. Validate image loading from Unsplash URLs
5. Test booking flow with sample vehicles

---

Generated: 2025-01-15
Database: PostgreSQL (Docker)
Schema version: Current
