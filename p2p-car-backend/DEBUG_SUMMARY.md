# P2P Car Rental Backend - Debug Summary

## Issue Summary
The backend API was returning 500 errors for all endpoints after initial startup.

## Root Causes Identified

### 1. PostgreSQL Permission Issue (Primary Issue)
**Error:** `ERROR: permission denied for schema public`

**Cause:** The database user `p2pcar` did not have sufficient privileges to create tables in the `public` schema.

**Fix Applied:**
```sql
GRANT ALL PRIVILEGES ON SCHEMA public TO p2pcar;
GRANT ALL PRIVILEGES ON DATABASE p2pcar TO p2pcar;
ALTER SCHEMA public OWNER TO p2pcar;
```

### 2. JWT Secret Key Weak Key Issue
**Error:** `io.jsonwebtoken.security.WeakKeyException: The signing key's size is 440 bits which is not secure enough for the HS512 algorithm`

**Cause:** The default JWT secret key was too short (less than 512 bits required for HS512 algorithm).

**Fix Applied:**
Updated `/Users/nan.jiang/Work/p2pcar/p2p-car-backend/src/main/resources/application.yml`:
```yaml
jwt:
  secret: ${JWT_SECRET:zWT9vTSnoaXCXZUPNWYOnUDOWD/ii9sNmr/ZUWYu9lgVAd2tf2zkyVmONo+DJH+nviKW39IQpl5NO1+055YNAg==}
  expiration: 86400000  # 24 hours
  refresh-expiration: 604800000  # 7 days
```

## Verification Results

### Database Tables Created Successfully
```
 messages       | table | p2pcar
 orders         | table | p2pcar
 payments       | table | p2pcar
 reviews        | table | p2pcar
 users          | table | p2pcar
 vehicle_images | table | p2pcar
 vehicles       | table | p2pcar
```

### API Endpoints Working

#### 1. GET /api/v1/vehicles
**Status:** ✅ Working
**Response:** Returns paginated vehicle list (empty when no vehicles exist)

#### 2. POST /api/v1/auth/register
**Status:** ✅ Working
**Request Body:**
```json
{
  "phone": "13800138000",
  "password": "password123",
  "code": "123456",
  "name": "Test User",
  "role": "RENTER"
}
```
**Response:** Returns JWT token and user information

### Test Data Created
- User 1: RENTER account (13800138000)
- User 2: OWNER account (13900139000)
- Vehicle 1: Tesla Model 3 (北京市朝阳区)

## Configuration Details

### PostgreSQL
- **Version:** PostgreSQL 16 (Homebrew)
- **Database:** p2pcar
- **User:** p2pcar
- **Port:** 5432
- **Connection:** localhost

### Redis
- **Status:** ✅ Running
- **Port:** 6379
- **Connection:** localhost
- **Password:** None

### Spring Boot Application
- **Port:** 8080
- **Context Path:** /api/v1
- **Base URL:** http://localhost:8080/api/v1
- **Status:** ✅ Running

## Important Notes

1. **JWT Secret:** The JWT secret has been updated to a secure 512-bit key. For production, use environment variable `JWT_SECRET` to override the default value.

2. **Database Permissions:** The `p2pcar` user now has full ownership of the `public` schema, which is appropriate for development. For production, consider more restrictive permissions.

3. **Verification Code:** The registration endpoint currently accepts any 6-digit verification code. TODO: Implement actual verification code validation with Redis.

4. **Application Restart:** The application was restarted after fixing the configuration issues. Spring Boot DevTools is enabled for automatic reload during development.

## Files Modified

1. `/Users/nan.jiang/Work/p2pcar/p2p-car-backend/src/main/resources/application.yml`
   - Updated JWT secret key

## Next Steps

1. Implement verification code validation in Redis
2. Add more comprehensive error logging
3. Set up proper environment variable configuration for production
4. Consider implementing database migrations (Flyway/Liquibase) instead of `ddl-auto: create`
5. Add integration tests for API endpoints

## Application Startup Command
```bash
cd /Users/nan.jiang/Work/p2pcar/p2p-car-backend
./gradlew bootRun
```

## Log File Location
```bash
/tmp/spring-boot.log
```
