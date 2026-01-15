# Vehicle Filters - Component API Guide

## Component: VehicleFilters

### Import
```typescript
import VehicleFilters, { VehicleFilterValues, VehicleType, PriceRange } from '@/components/VehicleFilters';
```

### Props Interface
```typescript
interface VehicleFiltersProps {
  onFiltersChange: (filters: VehicleFilterValues) => void;
  loading?: boolean;
}
```

### Filter Values Interface
```typescript
interface VehicleFilterValues {
  vehicleType: VehicleType;
  priceRange: PriceRange;
  seats: number[];
  fuelTypes: string[];
}
```

### Type Definitions
```typescript
type VehicleType = 'all' | 'sedan' | 'suv' | 'mpv' | 'sports' | 'electric';
type PriceRange = 'all' | '0-200' | '200-500' | '500-1000' | '1000+';
```

## Usage Example

### Basic Integration
```typescript
'use client';

import { useState } from 'react';
import VehicleFilters, { VehicleFilterValues } from '@/components/VehicleFilters';
import { searchVehicles } from '@/services/vehicleApi';

export default function MyPage() {
  const [filters, setFilters] = useState<VehicleFilterValues>({
    vehicleType: 'all',
    priceRange: 'all',
    seats: [],
    fuelTypes: [],
  });

  const handleFiltersChange = (newFilters: VehicleFilterValues) => {
    setFilters(newFilters);
    // Trigger API call with new filters
    fetchVehicles(newFilters);
  };

  const fetchVehicles = async (filterValues: VehicleFilterValues) => {
    // Map filters to API parameters
    const params = {
      vehicleType: filterValues.vehicleType === 'all' ? undefined : filterValues.vehicleType.toUpperCase(),
      minPrice: filterValues.priceRange === 'all' ? undefined : parseInt(filterValues.priceRange.split('-')[0]),
      maxPrice: filterValues.priceRange === 'all' ? undefined : parseInt(filterValues.priceRange.split('-')[1]),
      seats: filterValues.seats.length > 0 ? filterValues.seats : undefined,
      fuelType: filterValues.fuelTypes.length > 0 ? filterValues.fuelTypes : undefined,
    };

    const results = await searchVehicles(params);
    // Handle results
  };

  return (
    <div>
      <VehicleFilters
        onFiltersChange={handleFiltersChange}
        loading={false}
      />
      {/* Display vehicle results */}
    </div>
  );
}
```

### With Loading State
```typescript
const [loading, setLoading] = useState(false);

const handleFiltersChange = async (newFilters: VehicleFilterValues) => {
  setLoading(true);
  try {
    await fetchVehicles(newFilters);
    setFilters(newFilters);
  } finally {
    setLoading(false);
  }
};

return (
  <VehicleFilters
    onFiltersChange={handleFiltersChange}
    loading={loading}
  />
);
```

## Component Structure

### Visual Layout
```
┌─────────────────────────────────────────────────────────────┐
│  🎛️ 筛选条件 (3)              [清除筛选]          [▼]      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  车型                          价格区间                       │
│  [全部车型] [轿车] [SUV]        [全部价格 ▼]                 │
│  [MPV] [跑车] [电动车]                                         │
│                                                               │
│  座位数                        燃料类型                       │
│  [4座] [5座] [6座] [7座]       [汽油] [电动] [混动]          │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Filter Categories

#### 1. Vehicle Type (车型)
- Type: Single select (radio behavior)
- Options:
  - 全部车型 (all)
  - 轿车 (sedan)
  - SUV (suv)
  - MPV (mpv)
  - 跑车 (sports)
  - 电动车 (electric)
- UI: Tag buttons with rounded corners (16px)
- Active state: Blue background (#1E88E5)

#### 2. Price Range (价格区间)
- Type: Single select dropdown
- Options:
  - 全部价格 (all)
  - ¥200 以下 (0-200)
  - ¥200-500 (200-500)
  - ¥500-1000 (500-1000)
  - ¥1000 以上 (1000+)
- UI: Custom styled select with icon

#### 3. Seats (座位数)
- Type: Multi-select (checkbox behavior)
- Options: 4, 5, 6, 7
- UI: Chip buttons
- Multiple selections allowed
- Active state: Blue background (#1E88E5)

#### 4. Fuel Type (燃料类型)
- Type: Multi-select (checkbox behavior)
- Options:
  - 汽油
  - 电动
  - 混动
- UI: Chip buttons
- Multiple selections allowed
- Active state: Blue background (#1E88E5)

## Styling Customization

### CSS Modules
The component uses CSS Modules for styling. Main classes:

```css
.filtersContainer    /* Main container */
.filtersHeader      /* Header section */
.filterInfo         /* Title and counter */
.filterActions      /* Reset and toggle buttons */
.filtersContent     /* Filter options grid */
.filterSection      /* Individual filter category */
.tagGroup          /* Vehicle type buttons */
.tagButton         /* Individual tag button */
.chipGroup         /* Seats and fuel type buttons */
.chipButton        /* Individual chip button */
.selectWrapper     /* Price dropdown container */
.select            /* Price dropdown */
```

### Theme Colors
```css
--primary-blue: #1E88E5;      /* Active state */
--text-primary: #101828;       /* Headings */
--text-secondary: #4A5565;     /* Labels */
--text-tertiary: #6B7280;      /* Icons */
--border-color: #E5E7EB;       /* Borders */
--bg-light: #F9FAFB;           /* Inactive buttons */
--bg-white: #FFFFFF;           /* Container */
```

## Responsive Behavior

### Desktop (>1024px)
- 4-column grid layout
- All filters visible
- Full hover effects

### Tablet (768px-1024px)
- 2-column grid layout
- Filters stack vertically
- Maintained readability

### Mobile (<768px)
- Single column layout
- Optimized spacing
- Smaller touch targets
- Compact buttons

## Interaction States

### Normal State
- All filters selectable
- Hover effects available
- Clear visual hierarchy

### Active State
- Selected filters highlighted in blue (#1E88E5)
- White text on blue background
- Clear visual feedback

### Disabled/Loading State
- Reduced opacity (0.6)
- Pointer events disabled
- Visual feedback that filters are inactive

### Hover State
- Subtle background change
- Border color darkens
- Smooth transition (0.2s)

## Accessibility Features

### ARIA Labels
```html
<button aria-label="Toggle filters">...</button>
<button aria-label="Clear all filters">...</button>
<select aria-label="Select price range">...</select>
```

### Keyboard Navigation
- Tab: Navigate between controls
- Enter/Space: Activate buttons
- Arrow keys: Navigate dropdown options
- Escape: Close dropdown (if open)

### Focus Indicators
- Blue outline on focus
- 3px box-shadow with primary color
- Visible keyboard focus trails

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

Minimum browser versions:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

### Optimization
- Minimal re-renders with proper React state
- Efficient CSS with hardware acceleration
- No external dependencies
- Small bundle size impact

### Bundle Size
Approximate added size:
- JavaScript: ~8KB (minified)
- CSS: ~4KB (minified)
- Total: ~12KB

## Migration from Previous Version

If upgrading from a previous filter implementation:

1. Replace old filter component import:
```typescript
// Old
import OldFilters from './OldFilters';

// New
import VehicleFilters, { VehicleFilterValues } from '@/components/VehicleFilters';
```

2. Update state interface:
```typescript
// Old
const [filters, setFilters] = useState({ type: '', price: '' });

// New
const [filters, setFilters] = useState<VehicleFilterValues>({
  vehicleType: 'all',
  priceRange: 'all',
  seats: [],
  fuelTypes: [],
});
```

3. Update change handler:
```typescript
// Old
const handleChange = (type: string, value: string) => {
  setFilters({ ...filters, [type]: value });
};

// New
const handleFiltersChange = (newFilters: VehicleFilterValues) => {
  setFilters(newFilters);
  fetchVehicles(newFilters);
};
```

## Troubleshooting

### Common Issues

**Filters not updating results**
- Ensure `onFiltersChange` is properly connected
- Check that API calls are triggered on filter change
- Verify filter-to-parameter mapping is correct

**Styling conflicts**
- Check for global CSS overrides
- Verify CSS Module imports
- Inspect element for specificity issues

**TypeScript errors**
- Ensure all types are properly imported
- Check that `VehicleFilterValues` interface is used
- Verify prop types match component expectations

**Mobile display issues**
- Check responsive breakpoints
- Verify viewport meta tag
- Test on actual devices

## Future Enhancements

Potential additions:
- URL query parameter sync
- Filter presets (e.g., "Family Cars", "Budget")
- Advanced date range filtering
- Location-based filtering
- Brand selection
- More fuel types (diesel, hydrogen)
- Transmission type filter
- Year range filter
- Rating filter
- Features/amenities filter

## Support

For issues or questions:
1. Check this documentation
2. Review the implementation in `/p2p-web/src/components/VehicleFilters.tsx`
3. Examine styles in `/p2p-web/src/components/VehicleFilters.module.css`
4. See usage example in `/p2p-web/src/components/VehicleGrid.tsx`
5. Check API integration in `/p2p-web/src/services/vehicleApi.ts`
