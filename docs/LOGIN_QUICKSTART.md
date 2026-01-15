# Login Page - Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- Backend API running on `http://localhost:8080` (or configure in `.env.local`)

## Setup

1. **Navigate to the web directory:**
```bash
cd p2p-web
```

2. **Install dependencies (if not already done):**
```bash
npm install
```

3. **Configure environment variables:**
```bash
# Copy the example file
cp .env.local.example .env.local

# Edit .env.local if needed
# Default: NEXT_PUBLIC_API_URL=http://localhost:8080
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Access the login page:**
```
http://localhost:3000/login
```

## Testing the Login Page

### Manual Testing

1. **Open the login page** in your browser
2. **Test form validation:**
   - Try submitting with empty fields
   - Enter invalid email format
   - Enter short password (< 6 chars)
3. **Test successful login** (when backend is ready):
   - Email: `user@example.com`
   - Password: `password123`
4. **Test password toggle** (eye icon)
5. **Test "Remember me" checkbox**
6. **Test responsive design** (resize browser or use DevTools)

### Backend Mock Testing

If backend is not ready, you can test the UI with mock data. The form will show validation errors but won't actually authenticate.

## Integration Checklist

- [ ] Backend API is running
- [ ] CORS is configured for `http://localhost:3000`
- [ ] Login endpoint exists: `POST /api/v1/auth/login`
- [ ] Test user is created in database
- [ ] JWT tokens are configured
- [ ] Environment variables are set

## Common Issues

### Issue: "Network request failed"
**Solution:** Check if backend is running and CORS is configured.

### Issue: "Login fails with valid credentials"
**Solution:** Verify API endpoint URL in `.env.local` and check backend logs.

### Issue: "Styles not loading"
**Solution:** Restart dev server and clear browser cache.

### Issue: "TypeScript errors"
**Solution:** Run `npm run build` to check for type errors.

## Development Workflow

1. **Make changes to `LoginForm.tsx`**
2. **Styles in `LoginForm.module.css`**
3. **Save and see hot-reload in browser**
4. **Test functionality**
5. **Run tests:** `npm test -- LoginForm.test.tsx` (when test framework is set up)

## File Structure

```
p2p-web/src/
├── app/
│   └── login/
│       └── page.tsx              # Route: /login
├── components/
│   ├── LoginForm.tsx             # Login form component
│   └── LoginForm.module.css      # Scoped styles
├── contexts/
│   └── AuthContext.tsx           # Global auth state
├── hooks/
│   └── useAuth.ts                # Auth hook
├── services/
│   └── authApi.ts                # API calls
└── types/
    └── api.ts                    # TypeScript types
```

## Key Files to Understand

1. **`LoginForm.tsx`** - Main component with form logic
2. **`LoginForm.module.css`** - All styles for the login page
3. **`authApi.ts`** - API service for authentication
4. **`useAuth.ts`** - Custom hook for auth state management
5. **`AuthContext.tsx`** - Context provider for global auth state

## Next Steps

After login is working:

1. **Create registration page** at `/register`
2. **Create forgot password page** at `/forgot-password`
3. **Implement social login** (Google, Facebook)
4. **Add protected routes** (require auth)
5. **Set up auth middleware** for API calls
6. **Add token refresh mechanism**
7. **Implement logout functionality**

## Support

For issues or questions:
- Check `/docs/LOGIN_IMPLEMENTATION.md` for detailed documentation
- Check `/docs/LOGIN_PREVIEW.md` for visual reference
- Review code comments in `LoginForm.tsx`

## Quick Reference

### Login Page URL
```
http://localhost:3000/login
```

### API Endpoint
```
POST http://localhost:8080/api/v1/auth/login
```

### Request Body
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Success Response
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "User Name"
    }
  }
}
```

### Storage Locations
- **localStorage**: When "Remember me" is checked
- **sessionStorage**: When "Remember me" is unchecked
- **Keys**: `auth_token`, `auth_user`
