# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **P2P Car Rental Platform** (车享出行) - a peer-to-peer car sharing application with a monorepo structure. The platform allows users to list their vehicles for rent and search for available vehicles to rent. The project includes a Next.js 16 frontend with a Kotlin/Spring Boot backend.

### Key Features
- **Vehicle Listing & Search**: Browse available vehicles with advanced filtering
- **User Authentication**: Login and registration with phone/email verification
- **Vehicle Details**: Comprehensive vehicle information with ratings and reviews
- **Host Profiles**: Vehicle owner information and trip history
- **High-Fidelity Design**: Implementation from Figma with precise styling

## Repository Structure

```
p2pcar/
├── p2p-web/                      # Frontend Next.js application
│   ├── src/
│   │   ├── app/                  # Next.js App Router pages
│   │   │   ├── page.tsx         # Home page (vehicle listing)
│   │   │   ├── layout.tsx       # Root layout with fonts
│   │   │   ├── login/           # Login page
│   │   │   └── register/        # Registration page
│   │   ├── components/           # React components with CSS Modules
│   │   │   ├── P2PRentalPage.tsx        # Main page wrapper
│   │   │   ├── SearchBar.tsx            # Hero section with search inputs
│   │   │   ├── VehicleGrid.tsx          # Vehicle grid with filtering & pagination
│   │   │   ├── VehicleCard.tsx          # Individual vehicle card
│   │   │   ├── VehicleFilters.tsx       # Filter sidebar
│   │   │   ├── LoginForm.tsx            # Login form component
│   │   │   ├── RegisterForm.tsx         # Registration form with phone/email toggle
│   │   │   ├── Navbar.tsx               # Navigation bar
│   │   │   └── Footer.tsx               # Page footer
│   │   ├── services/             # API service layer
│   │   │   ├── authApi.ts       # Authentication API
│   │   │   └── vehicleApi.ts    # Vehicle search API
│   │   ├── types/                # TypeScript type definitions
│   │   │   └── api.ts           # API request/response interfaces
│   │   ├── contexts/             # React contexts
│   │   │   └── AuthContext.tsx  # Authentication state management
│   │   ├── hooks/                # Custom React hooks
│   │   │   └── useAuth.ts       # Authentication hook
│   │   └── __tests__/           # Test files
│   ├── public/                   # Static assets
│   └── package.json             # Frontend dependencies
├── p2p-car-backend/             # Backend Spring Boot application
│   ├── scripts/                 # Database seed scripts
│   │   ├── seed-test-data.sql        # 50 vehicles, 15 users
│   │   ├── seed-vehicle-images.sql   # 112 vehicle images
│   │   └── SEED_DATA_SUMMARY.md      # Test data documentation
│   └── src/                     # Kotlin source code
├── docs/                        # Project documentation
└── CLAUDE.md                    # This file
```

## Development Commands

**All commands must be run from the `p2p-web/` directory:**

```bash
cd p2p-web

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Tech Stack

### Frontend
- **Next.js 16.1.1** with App Router (Turbopack enabled)
- **React 19.2.3** with Hooks and Server Components
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** (global utilities via `@import "tailwindcss"`)
- **CSS Modules** (primary styling approach for components)

### Backend
- **Kotlin** with Spring Boot
- **PostgreSQL** database (Docker container)
- **REST API** with JWT authentication

## Architecture

### Path Aliases
- `@/*` maps to `./src/*` (configured in `p2p-web/tsconfig.json`)

### Component Structure

#### Main Page Components
- **P2PRentalPage.tsx** - Main page wrapper that composes all sections
- **SearchBar.tsx** - Hero section with location and date search inputs
- **VehicleGrid.tsx** - Grid container with:
  - Sort dropdown (recommended, price low/high, rating)
  - VehicleFilters component for filtering
  - Pagination (16 items per page, 4 columns)
  - Fetches data from backend API
- **VehicleCard.tsx** - Individual vehicle card with:
  - Vehicle image, name, rating, reviews
  - Location, seats, transmission, fuel type
  - Host information and trip count
  - Price per day in CNY
  - Badges (超级车主, 即时预订)

#### Authentication Components
- **LoginForm.tsx** - Login form with:
  - Email/phone and password inputs
  - Remember me checkbox
  - Social login buttons (Google, Facebook)
  - Left-right split layout
- **RegisterForm.tsx** - Registration form with:
  - Phone/Email registration toggle
  - Verification code input with 60-second countdown
  - Password with show/hide toggle
  - Terms and conditions checkbox
  - Social login options
  - Comprehensive form validation

#### Layout Components
- **Navbar.tsx** - Top navigation with logo and menu
- **Footer.tsx** - Page footer with links

#### Filter Component
- **VehicleFilters.tsx** - Sidebar filters for:
  - Vehicle type (all, sedan, SUV, MPV, sports, luxury, economy, compact, electric)
  - Price range (0-200, 200-500, 500+ CNY/day)
  - Seats (2, 4, 5, 7)
  - Fuel type (petrol, electric, hybrid)

### Data Models

#### Vehicle Interface (Frontend)
```typescript
interface Vehicle {
  id: number;
  name: string;
  image: string;              // Primary image URL
  rating: number;             // 4.5 - 5.0
  reviewCount: number;
  location: string;           // e.g., "北京市朝阳区"
  seats: number;              // 2, 4, 5, 7
  transmission: string;       // "自动" / "手动"
  fuel: string;               // "汽油" / "电动" / "混合"
  hostName: string;           // Host display name
  hostInitial: string;        // First letter for avatar
  trips: number;              // Total trips completed
  price: number;              // CNY per day
  badges: string[];           // ["超级车主", "即时预订"]
}
```

#### API Types
```typescript
// Vehicle search response
interface VehicleResponse {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  images: string[];
  instantBook: boolean;
  host: HostInfo | null;
  // ... more fields
}

// Authentication
interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface RegisterRequest {
  email?: string;
  phone?: string;
  password: string;
  name: string;
  verificationCode: string;
}

interface SendVerificationCodeRequest {
  type: 'phone' | 'email';
  phone?: string;
  email?: string;
}
```

### API Integration

#### Vehicle Search API
```typescript
// In VehicleGrid.tsx
const { vehicles, total } = await searchVehicles({
  vehicleType,      // Optional: filter by type
  minPrice,         // Optional: minimum price
  maxPrice,         // Optional: maximum price
  seats,            // Optional: array of seat counts
  fuelType,         // Optional: array of fuel types
  sortBy,          // 'rating_desc' | 'price_asc' | 'price_desc'
  page,            // Pagination page number
  size             // Items per page (16)
});
```

#### Authentication API
```typescript
// Login
await login({ email, password, rememberMe });

// Register with verification code
await register({
  name,
  email,          // Optional (phone OR email required)
  phone,          // Optional (phone OR email required)
  password,
  verificationCode
});

// Send verification code
await sendVerificationCode({
  type: 'phone' | 'email',
  phone,          // Required if type is 'phone'
  email           // Required if type is 'email'
});
```

### Styling Approach

**Primary: CSS Modules** - Each component imports styles as:
```tsx
import styles from './ComponentName.module.css';
```
Usage: `className={styles.className}`

**Global: Tailwind CSS v4** - Imported via `@import "tailwindcss"` in `globals.css` for utility classes.

### Design Tokens

#### Color Palette
- **Primary Blue**: `#1E88E5` (buttons, badges, links, active states)
- **Hover Blue**: `#1565C0` (button hover, toggle active hover)
- **Dark Blue**: `#0D47A1` (gradient end)
- **Input Border**: `#E0E0E0` (default input borders)
- **Input Focus**: `#E3F2FD` (input background on focus)
- **Text Colors**:
  - Headings: `#101828`
  - Body: `#4A5565`
  - Secondary: `#6A7282`
  - Error: `#DC2626`
- **Borders**: `#D1D5DC`
- **Rating Star**: `#F59E0B`

#### Layout Specifications
- **Grid Container**: `max-width: 1536px` with `32px 128px 64px` padding
- **Vehicle Grid**: 4 columns (responsive: 3 @ 1400px, 2 @ 1024px, 1 @ 768px)
- **Grid Gap**: `24px`
- **Pagination**: 16 items per page
- **Border Radius**: `4px` (most elements)
- **Input Height**: `50px`

#### Typography
- **Font Family**: Inter (with Noto Sans JP/SC fallback for Chinese)
- **Font Sizes**:
  - H1: 30px (registration page title)
  - H2: 18px (section titles)
  - Body: 16px
  - Small: 14px
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

#### Register Page Layout
- **Left Panel**: 40% width, 160px horizontal padding
- **Right Panel**: 60% width, gradient background (#1565C0 → #0D47A1)
- **Form Gap**: 24px between fields
- **Header Margin**: 80px top, 32px bottom
- **Button Height**: 48-50px

## Test Data

The backend includes comprehensive test data:
- **50 vehicles** across 10 categories (luxury, SUV, sedan, economy, electric, sports, compact, MPV)
- **15 verified users** with role OWNER
- **112 vehicle images** from Unsplash (2-3 per vehicle)
- **17 cities** across China
- **Price range**: 90 - 2500 CNY/day

See [p2p-car-backend/scripts/SEED_DATA_SUMMARY.md](p2p-car-backend/scripts/SEED_DATA_SUMMARY.md) for details.

## Development Guidelines

### When Working with Components
1. Always use CSS Modules for component-specific styles
2. Follow the existing naming conventions (PascalCase for components, camelCase for utilities)
3. Maintain responsive design with breakpoints at 768px, 1024px, 1200px, 1400px
4. Use TypeScript interfaces for all props and data structures
5. Follow the established color scheme and design tokens

### When Adding Features
1. Create corresponding types in `src/types/api.ts` for API contracts
2. Add API service methods in `src/services/`
3. Use the existing CSS Module pattern
4. Ensure mobile responsiveness
5. Test with the backend API running on port 8080

### Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use `async/await` for API calls
- Handle errors gracefully with user-friendly messages
- Use semantic HTML elements
- Follow React best practices (keys, memoization, etc.)

## Git Workflow

The project uses Git with GitHub:
- Main branch: `main`
- SSH authentication configured
- Recent commits include registration page, vehicle grid updates, and test data

## Important Notes

- **Backend API**: Runs on `http://localhost:8080` (configure via `NEXT_PUBLIC_API_URL`)
- **Database**: PostgreSQL in Docker container (`p2pcar-postgres`)
- **Images**: Stored as Unsplash URLs in database, loaded directly from CDN
- **Authentication**: JWT-based with verification code for registration
- **Language**: Primary UI language is Chinese (Simplified)
- **Currency**: All prices in CNY (Chinese Yuan)
