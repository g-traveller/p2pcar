# P2P Car Rental - Authentication API Documentation

## Overview

This document describes the complete authentication system for the P2P Car Rental platform backend.

## Technology Stack

- **Language**: Kotlin 2.0
- **Framework**: Spring Boot 3.2
- **Security**: Spring Security with JWT (JSON Web Tokens)
- **Password Encryption**: BCrypt (strength=10)
- **Database**: PostgreSQL 16

## Authentication Endpoints

Base URL: `http://localhost:8080/api/v1`

### 1. Login

**Endpoint**: `POST /auth/login`

**Description**: Authenticate user with email or phone number and receive JWT token.

**Request Body**:
```json
{
  "emailOrPhone": "test@example.com",
  "password": "password123"
}
```

**Request Fields**:
- `emailOrPhone` (string, required): User's email address or phone number
  - Email format: `user@example.com`
  - Phone format: `13800138000`
- `password` (string, required): User's password

**Success Response** (200 OK):
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicGhvbmUiOiIxMzkwMDAwMDAwMSIsInJvbGUiOiJSRU5URVIiLCJpYXQiOjE2OTk5OTk5OTksImV4cCI6MTcwMDg2Mzk5OX0...",
    "refreshToken": "",
    "user": {
      "id": 1,
      "phone": "13900000001",
      "email": "test@example.com",
      "name": "测试用户",
      "avatar": "https://i.pravatar.cc/150?u=test",
      "role": "RENTER",
      "status": "ACTIVE",
      "idCardVerified": true,
      "driverLicenseVerified": true,
      "createdAt": "2024-01-15T10:30:00"
    }
  },
  "timestamp": 1705257000000
}
```

**Error Responses**:

400 Bad Request:
```json
{
  "code": 400,
  "message": "Email or phone is required",
  "timestamp": 1705257000000
}
```

401 Unauthorized:
```json
{
  "code": 401,
  "message": "Invalid credentials",
  "timestamp": 1705257000000
}
```

### 2. Register

**Endpoint**: `POST /auth/register`

**Description**: Register a new user account.

**Request Body**:
```json
{
  "phone": "13900000003",
  "password": "password123",
  "code": "123456",
  "name": "张三",
  "role": "RENTER"
}
```

**Request Fields**:
- `phone` (string, required): User's phone number (format: `1[3-9]\\d{9}`)
- `password` (string, required): Password (6-50 characters)
- `code` (string, required): SMS verification code (6 digits)
- `name` (string, required): User's display name (2-50 characters)
- `role` (string, optional): User role (OWNER, RENTER, ADMIN) - defaults to RENTER

**Success Response** (200 OK):
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9...",
    "refreshToken": "",
    "user": {
      "id": 3,
      "phone": "13900000003",
      "email": null,
      "name": "张三",
      "avatar": null,
      "role": "RENTER",
      "status": "ACTIVE",
      "idCardVerified": false,
      "driverLicenseVerified": false,
      "createdAt": "2024-01-15T10:35:00"
    }
  },
  "timestamp": 1705257000000
}
```

**Error Responses**:

409 Conflict (User already exists):
```json
{
  "code": 409,
  "message": "User already exists",
  "timestamp": 1705257000000
}
```

### 3. Get Current User

**Endpoint**: `GET /auth/me`

**Description**: Get the currently authenticated user's information.

**Headers**:
```
Authorization: Bearer <token>
```

**Success Response** (200 OK):
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "phone": "13900000001",
    "email": "test@example.com",
    "name": "测试用户",
    "avatar": "https://i.pravatar.cc/150?u=test",
    "role": "RENTER",
    "status": "ACTIVE",
    "idCardVerified": true,
    "driverLicenseVerified": true,
    "createdAt": "2024-01-15T10:30:00"
  },
  "timestamp": 1705257000000
}
```

**Error Responses**:

401 Unauthorized (Invalid or missing token):
```json
{
  "code": 401,
  "message": "Unauthorized",
  "timestamp": 1705257000000
}
```

### 4. Logout

**Endpoint**: `POST /auth/logout`

**Description**: Logout the current user (client-side token removal).

**Headers**:
```
Authorization: Bearer <token>
```

**Success Response** (200 OK):
```json
{
  "code": 200,
  "message": "Logged out successfully",
  "data": null,
  "timestamp": 1705257000000
}
```

**Note**: Since the authentication uses stateless JWT tokens, logout is handled client-side by removing the token. For server-side token invalidation, implement a Redis-based token blacklist.

## Test Users

The following test users are available in the development environment:

### Email Login Users

| Email | Password | Role | Name | Phone |
|-------|----------|------|------|-------|
| test@example.com | password123 | RENTER | 测试用户 | 13900000001 |
| admin@example.com | admin123 | ADMIN | 管理员 | 13900000002 |
| zhang.wei@example.com | password123 | OWNER | 张伟 | 13800138001 |
| li.ming@example.com | password123 | OWNER | 李明 | 13800138002 |
| wang.fang@example.com | password123 | OWNER | 王芳 | 13800138003 |
| liu.qiang@example.com | password123 | OWNER | 刘强 | 13800138004 |
| chen.ying@example.com | password123 | OWNER | 陈颖 | 13800138005 |
| zhao.lei@example.com | password123 | RENTER | 赵雷 | 13800138006 |

### Phone Login Users

All the users above can also login using their phone numbers with the same passwords.

## User Roles

- **OWNER**: Vehicle owner who can list vehicles for rent
- **RENTER**: Regular user who can rent vehicles
- **ADMIN**: Administrator with full system access

## User Status

- **ACTIVE**: Account is active and can login
- **SUSPENDED**: Account is suspended (cannot login)
- **DELETED**: Account is deleted (cannot login)

## JWT Token Configuration

- **Algorithm**: HS512
- **Secret**: Configured in `application.yml` (default: 64-byte key)
- **Token Expiration**: 24 hours (86400000 ms)
- **Refresh Token Expiration**: 7 days (604800000 ms)

### JWT Payload Structure

```json
{
  "sub": "1",                    // User ID
  "phone": "13900000001",        // User's phone
  "role": "RENTER",              // User's role
  "iat": 1705257000,             // Issued at (Unix timestamp)
  "exp": 1705343400              // Expiration (Unix timestamp)
}
```

## Security Configuration

### CORS Configuration

- **Allowed Origins**: `http://localhost:3000`, `http://localhost:3001`
- **Allowed Methods**: GET, POST, PUT, DELETE, OPTIONS, PATCH
- **Allowed Headers**: `*`
- **Allow Credentials**: `true`
- **Max Age**: 3600 seconds

### Public Endpoints

The following endpoints are accessible without authentication:
- `/auth/**` - All authentication endpoints
- `/vehicles/**` - Vehicle listing endpoints
- `/error` - Error handling

### Protected Endpoints

All other endpoints require a valid JWT token in the `Authorization` header:
```
Authorization: Bearer <your-jwt-token>
```

## Password Encryption

Passwords are encrypted using BCrypt with strength 10:
- **Algorithm**: BCrypt
- **Strength**: 10 (2^10 iterations)
- **Format**: `$2b$10$...`

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 200 | success | Request successful |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Authentication failed or token invalid |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 500 | Internal Server Error | Server error |

## Usage Examples

### cURL Examples

#### Login with Email

```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "emailOrPhone": "test@example.com",
    "password": "password123"
  }'
```

#### Login with Phone

```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "emailOrPhone": "13900000001",
    "password": "password123"
  }'
```

#### Get Current User

```bash
curl -X GET http://localhost:8080/api/v1/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

#### Logout

```bash
curl -X POST http://localhost:8080/api/v1/auth/logout \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### JavaScript/Fetch Examples

```javascript
// Login
async function login(email, password) {
  const response = await fetch('http://localhost:8080/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emailOrPhone: email,
      password: password
    })
  });

  const data = await response.json();

  if (data.code === 200) {
    // Store token in localStorage
    localStorage.setItem('token', data.data.token);
    localStorage.setItem('user', JSON.stringify(data.data.user));
    return data.data;
  } else {
    throw new Error(data.message);
  }
}

// Get Current User
async function getCurrentUser() {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:8080/api/v1/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (data.code === 200) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
}

// Logout
async function logout() {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:8080/api/v1/auth/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  // Clear local storage
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  return await response.json();
}
```

## Testing

### Manual Testing

1. Start the backend server:
```bash
cd p2p-car-backend
./gradlew bootRun
```

2. Test login using cURL or Postman:
```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"emailOrPhone":"test@example.com","password":"password123"}'
```

### Automated Testing

Run the test suite:
```bash
cd p2p-car-backend
./gradlew test
```

## Troubleshooting

### Common Issues

1. **"User not found" error**
   - Verify the user exists in the database
   - Check if the email/phone is correct

2. **"Invalid credentials" error**
   - Verify the password is correct
   - Check if the account status is ACTIVE

3. **CORS errors**
   - Verify the frontend origin is in the allowed origins list
   - Check if the CORS headers are properly configured

4. **JWT token expired**
   - The token expires after 24 hours
   - Implement refresh token mechanism for long-lived sessions

## Development Notes

### Token Management

- Tokens are generated using `JwtTokenProvider`
- Token validation is handled by `JwtAuthenticationFilter`
- User details are loaded by `CustomUserDetailsService`

### Password Management

- Passwords are encoded using `BCryptPasswordEncoder`
- Never store plain text passwords
- Use the `PasswordHashGenerator` utility to generate test hashes

### Security Best Practices

1. Always use HTTPS in production
2. Implement rate limiting on login endpoints
3. Add CAPTCHA for brute-force protection
4. Implement account lockout after failed attempts
5. Use refresh tokens for better security
6. Implement token blacklist for logout

## Future Enhancements

- [ ] Implement refresh token mechanism
- [ ] Add email verification
- [ ] Implement phone number verification with SMS
- [ ] Add password reset functionality
- [ ] Implement two-factor authentication (2FA)
- [ ] Add OAuth2 social login (Google, Facebook, WeChat)
- [ ] Implement token blacklist using Redis
- [ ] Add login attempt tracking and account lockout

## Related Files

- **Controller**: `/src/main/kotlin/com/p2pcar/controller/AuthController.kt`
- **Service**: `/src/main/kotlin/com/p2pcar/service/UserService.kt`
- **Security Config**: `/src/main/kotlin/com/p2pcar/config/SecurityConfig.kt`
- **JWT Provider**: `/src/main/kotlin/com/p2pcar/security/JwtTokenProvider.kt`
- **User Details**: `/src/main/kotlin/com/p2pcar/security/CustomUserDetailsService.kt`
- **Request DTOs**: `/src/main/kotlin/com/p2pcar/dto/request/LoginRequest.kt`, `RegisterRequest.kt`
- **Response DTOs**: `/src/main/kotlin/com/p2pcar/dto/response/AuthResponse.kt`, `UserResponse.kt`
- **Test Data**: `/src/main/resources/data.sql`
- **Configuration**: `/src/main/resources/application.yml`
