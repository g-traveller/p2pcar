# Integration Testing Guide

This guide helps you test the frontend-backend integration.

## Prerequisites

1. **Backend Running**: Spring Boot API on `http://localhost:8080`
2. **Frontend Running**: Next.js app on `http://localhost:3000`
3. **Database**: MySQL/PostgreSQL with vehicle data

## Quick Start

### Step 1: Start Backend

```bash
cd p2p-car-backend
./gradlew bootRun
```

Wait for: `Started P2pCarApplicationKt in X.XX seconds`

**Verify backend is running:**
```bash
curl http://localhost:8080/api/v1/vehicles
```

Expected response:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 0,
    "items": [],
    "page": 0,
    "size": 20,
    "totalPages": 0
  },
  "timestamp": 1234567890
}
```

### Step 2: Add Test Data (if database is empty)

If the API returns empty items, add test vehicles:

**Option A: Use API endpoints** (if authentication is set up)
```bash
curl -X POST http://localhost:8080/api/v1/vehicles \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "奔驰",
    "model": "S级",
    "year": 2023,
    "seats": 5,
    "transmission": "AUTOMATIC",
    "fuelType": "PETROL",
    "pricePerDay": 888,
    "location": "北京市朝阳区",
    "description": "豪华轿车"
  }'
```

**Option B: Use database directly**
```sql
INSERT INTO vehicles (brand, model, year, seats, transmission, fuel_type, price_per_day, location, description, instant_book, is_super_host, total_trips, rating, review_count, status, created_at, updated_at)
VALUES
('奔驰', 'S级', 2023, 5, 'AUTOMATIC', 'PETROL', 888.00, '北京市朝阳区', '豪华轿车', true, true, 256, 4.9, 128, 'AVAILABLE', NOW(), NOW()),
('宝马', 'X5', 2023, 5, 'AUTOMATIC', 'PETROL', 680.00, '上海市浦东新区', '豪华SUV', true, false, 189, 4.8, 95, 'AVAILABLE', NOW(), NOW()),
('特斯拉', 'Model 3', 2023, 5, 'AUTOMATIC', 'ELECTRIC', 388.00, '深圳市南山区', '电动轿车', true, true, 445, 4.7, 234, 'AVAILABLE', NOW(), NOW());
```

### Step 3: Start Frontend

```bash
cd p2p-web
npm run dev
```

Wait for: `Ready in Xms` or `Local: http://localhost:3000`

### Step 4: Test in Browser

1. Open `http://localhost:3000`
2. Open Browser DevTools (F12)
3. Go to **Network** tab
4. Look for API call to `/api/v1/vehicles`

**Expected behavior:**
- Page loads with loading spinner
- API call appears in Network tab
- Vehicles display in grid (if data exists)
- No errors in Console tab

### Step 5: Test API with Frontend

Check the Network tab for the API request:

**Request URL:**
```
http://localhost:8080/api/v1/vehicles?page=0&size=20&sortBy=rating_desc
```

**Request Headers:**
```
Content-Type: application/json
```

**Response should match:**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 3,
    "items": [
      {
        "id": 1,
        "name": "奔驰 S级",
        "brand": "奔驰",
        "model": "S级",
        "image": "...",
        "images": ["..."],
        "price": 888.00,
        "rating": 4.9,
        "reviewCount": 128,
        "location": "北京市朝阳区",
        "seats": 5,
        "transmission": "AUTOMATIC",
        "fuel": "PETROL",
        "instantBook": true,
        "host": {...},
        "badges": [],
        "status": "AVAILABLE"
      }
    ],
    "page": 0,
    "size": 20,
    "totalPages": 1
  },
  "timestamp": 1234567890
}
```

## Troubleshooting

### Issue: "Failed to fetch" in browser console

**Check:**
1. Backend is running: `curl http://localhost:8080/api/v1/vehicles`
2. Frontend .env.local exists: `cat p2p-web/.env.local`
3. CORS errors in browser console

**Fix:**
```bash
# Restart backend
cd p2p-car-backend
./gradlew bootRun

# Restart frontend
cd p2p-web
npm run dev
```

### Issue: Vehicles not displaying

**Check:**
1. Network tab shows API call succeeded (200 status)
2. API response has `data.items` array with data
3. Console has no JavaScript errors

**Debug in browser console:**
```javascript
// Check if API is reachable
fetch('http://localhost:8080/api/v1/vehicles')
  .then(r => r.json())
  .then(console.log)
```

### Issue: Loading spinner never stops

**Check:**
1. Browser console for errors
2. Network tab for pending requests
3. Backend logs for errors

**Fix:**
- Check API response format matches `ApiResponse<PageResponse<VehicleResponse>>`
- Check response `code` is 200
- Check response `data` is not null

### Issue: CORS error in browser console

**Error message:**
```
Access to fetch at 'http://localhost:8080/api/v1/vehicles' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Fix:**
- Verify `SecurityConfig.kt` has CORS configuration
- Check backend is allowing origin `http://localhost:3000`
- Restart backend after CORS config changes

## Advanced Testing

### Test with Different Filters

In browser console:
```javascript
// Test location filter
fetch('http://localhost:8080/api/v1/vehicles?location=北京市')
  .then(r => r.json())
  .then(console.log)

// Test price filter
fetch('http://localhost:8080/api/v1/vehicles?minPrice=100&maxPrice=500')
  .then(r => r.json())
  .then(console.log)

// Test sort by price
fetch('http://localhost:8080/api/v1/vehicles?sortBy=price_asc')
  .then(r => r.json())
  .then(console.log)
```

### Test Error Handling

1. Stop backend
2. Reload frontend page
3. Should see error message with "重新加载" button
4. Click button to retry (will fail while backend is down)

5. Start backend
6. Click "重新加载" button
7. Should load vehicles successfully

## Performance Testing

### Check API Response Time

In Network tab:
1. Find `/vehicles` request
2. Check "Time" column
3. Should be < 500ms for local development

### Check Frontend Render Time

In React DevTools Profiler:
1. Start profiling
2. Interact with page
3. Stop profiling
4. Check render times

## Next Steps

Once integration is working:
1. ✅ Vehicles load from API
2. ✅ Loading state displays correctly
3. ✅ Error state displays correctly
4. ✅ Sort functionality works
5. ✅ Vehicle count displays correctly

Then:
- Add search/filter functionality
- Add pagination
- Add vehicle detail page
- Add booking flow
- Add authentication
