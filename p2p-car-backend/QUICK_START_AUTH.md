# Quick Start Guide - P2P Car Rental Authentication API

## Prerequisites

- Java 17+
- PostgreSQL 16
- Gradle 8.5+
- Kotlin 1.9.21+

## Setup

1. **Start PostgreSQL**
```bash
# Using Docker
docker run -d \
  --name p2pcar-db \
  -e POSTGRES_USER=p2pcar \
  -e POSTGRES_PASSWORD=p2pcar123 \
  -e POSTGRES_DB=p2pcar \
  -p 5432:5432 \
  postgres:16-alpine
```

2. **Configure application.yml** (if needed)
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/p2pcar
    username: p2pcar
    password: p2pcar123

jwt:
  secret: your-secret-key-min-64-chars
  expiration: 86400000  # 24 hours
```

3. **Start the backend**
```bash
cd p2p-car-backend
./gradlew bootRun
```

The API will be available at: `http://localhost:8080/api/v1`

## Quick Test

### Login

```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "emailOrPhone": "test@example.com",
    "password": "password123"
  }'
```

### Get Current User

```bash
TOKEN="your-jwt-token-from-login"

curl -X GET http://localhost:8080/api/v1/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

## Test Users

| Email | Password | Role |
|-------|----------|------|
| test@example.com | password123 | RENTER |
| admin@example.com | admin123 | ADMIN |

All users can also login with their phone numbers:
- test@example.com: 13900000001
- admin@example.com: 13900000002

## API Endpoints

### Public Endpoints (No Auth Required)

```
POST /api/v1/auth/login
POST /api/v1/auth/register
GET  /api/v1/vehicles/*
```

### Protected Endpoints (Auth Required)

```
GET  /api/v1/auth/me
POST /api/v1/auth/logout
GET  /api/v1/users/*
POST /api/v1/orders/*
```

## Response Format

Success:
```json
{
  "code": 200,
  "message": "success",
  "data": { ... },
  "timestamp": 1705257000000
}
```

Error:
```json
{
  "code": 401,
  "message": "Invalid credentials",
  "timestamp": 1705257000000
}
```

## JWT Token Usage

Include the token in the Authorization header:
```
Authorization: Bearer your-jwt-token-here
```

Token expiration: 24 hours

## Common Issues

**Database connection error?**
- Check PostgreSQL is running
- Verify credentials in application.yml

**CORS error?**
- Add your frontend URL to CORS configuration

**Invalid token?**
- Token expires after 24 hours
- Login again to get a new token

## Documentation

- Full API Documentation: `AUTH_API_DOCUMENTATION.md`
- Implementation Details: `AUTH_IMPLEMENTATION_SUMMARY.md`
- Test Script: `test-login.sh`

## Support

For issues or questions, refer to the documentation files or check the application logs.
