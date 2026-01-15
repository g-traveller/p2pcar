# Integration Quick Reference

## Files Created/Modified

### New Files
```
p2p-web/
├── src/types/api.ts                          # Type definitions
├── src/services/vehicleApi.ts                # API service
├── src/__tests__/api/vehicleApi.test.ts      # Unit tests
├── scripts/test-api.ts                       # Manual test script
├── .env.local                                # Environment config
├── .env.local.example                        # Env template
└── docs/
    ├── frontend-backend-integration.md       # Integration guide
    ├── testing-integration.md                # Testing guide
    └── integration-summary.md                # Summary document
```

### Modified Files
```
p2p-web/src/components/
├── VehicleGrid.tsx           # Added API integration
└── VehicleGrid.module.css    # Added loading/error styles
```

## Quick Start

### 1. Backend
```bash
cd p2p-car-backend
./gradlew bootRun
```

### 2. Frontend
```bash
cd p2p-web
npm run dev
```

### 3. Test
Open: http://localhost:3000

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/vehicles` | GET | List vehicles |
| `/api/v1/vehicles/{id}` | GET | Get vehicle |
| `/api/v1/vehicles/search/locations` | GET | Get locations |

## Key Components

### VehicleGrid
- Client component with hooks
- Fetches vehicles on mount
- Handles loading/error/empty states
- Supports sorting

### vehicleApi Service
- `searchVehicles(params?)` - Search vehicles
- `getVehicleById(id)` - Get single vehicle
- `getLocations()` - Get locations

## Data Transform

```typescript
// Backend → Frontend
AUTOMATIC → 自动
MANUAL → 手动
PETROL → 汽油
ELECTRIC → 电动
HYBRID → 混合
DIESEL → 柴油
```

## Environment

`.env.local`:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Failed to fetch | Check backend running, check .env.local |
| No vehicles | Add test data to database |
| CORS error | Check SecurityConfig.kt |
| Loading forever | Check API response format |

## Documentation

- `integration-summary.md` - Complete overview
- `frontend-backend-integration.md` - Detailed guide
- `testing-integration.md` - Testing instructions

## Test API

```bash
# Test backend
curl http://localhost:8080/api/v1/vehicles

# Test with filters
curl "http://localhost:8080/api/v1/vehicles?location=北京市"
```

## Next Steps

1. Add test data to database
2. Verify frontend displays vehicles
3. Implement search filters
4. Add pagination
5. Create detail page
