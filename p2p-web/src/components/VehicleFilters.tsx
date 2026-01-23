'use client';

import { useState } from 'react';
import styles from './VehicleFilters.module.css';

// Filter types
export type VehicleType = 'all' | 'sedan' | 'suv' | 'mpv' | 'sports' | 'electric';
export type PriceRange = 'all' | '0-200' | '200-500' | '500+';

export interface VehicleFiltersProps {
  onFiltersChange: (filters: VehicleFilterValues) => void;
  loading?: boolean;
}

export interface VehicleFilterValues {
  vehicleType: VehicleType;
  priceRange: PriceRange;
  seats: number[];
  fuelTypes: string[];
}

const VEHICLE_TYPES = [
  { value: 'all' as VehicleType, label: '全部车型' },
  { value: 'sedan' as VehicleType, label: '轿车' },
  { value: 'suv' as VehicleType, label: 'SUV' },
  { value: 'sports' as VehicleType, label: '跑车' },
  { value: 'electric' as VehicleType, label: '电动车' },
];

const PRICE_RANGES = [
  { value: 'all' as PriceRange, label: '全部价格' },
  { value: '0-200' as PriceRange, label: '¥200以下' },
  { value: '200-500' as PriceRange, label: '¥200-500' },
  { value: '500+' as PriceRange, label: '¥500以上' },
];

const SEATS_OPTIONS = [4, 5, 6, 7];

const FUEL_TYPES = ['汽油', '电动', '混动'];

export default function VehicleFilters({ onFiltersChange, loading = false }: VehicleFiltersProps) {
  const [filters, setFilters] = useState<VehicleFilterValues>({
    vehicleType: 'all',
    priceRange: 'all',
    seats: [],
    fuelTypes: [],
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleVehicleTypeChange = (type: VehicleType) => {
    const newFilters = { ...filters, vehicleType: type };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handlePriceRangeChange = (range: PriceRange) => {
    const newFilters = { ...filters, priceRange: range };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleSeatToggle = (seat: number) => {
    const newSeats = filters.seats.includes(seat)
      ? filters.seats.filter(s => s !== seat)
      : [...filters.seats, seat];
    const newFilters = { ...filters, seats: newSeats };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleFuelTypeToggle = (fuelType: string) => {
    const newFuelTypes = filters.fuelTypes.includes(fuelType)
      ? filters.fuelTypes.filter(f => f !== fuelType)
      : [...filters.fuelTypes, fuelType];
    const newFilters = { ...filters, fuelTypes: newFuelTypes };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: VehicleFilterValues = {
      vehicleType: 'all',
      priceRange: 'all',
      seats: [],
      fuelTypes: [],
    };
    setFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  const hasActiveFilters =
    filters.vehicleType !== 'all' ||
    filters.priceRange !== 'all' ||
    filters.seats.length > 0 ||
    filters.fuelTypes.length > 0;

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.vehicleType !== 'all') count++;
    if (filters.priceRange !== 'all') count++;
    if (filters.seats.length > 0) count++;
    if (filters.fuelTypes.length > 0) count++;
    return count;
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.filtersContainer} ${loading ? styles.loading : ''}`}>
      <div className={styles.filtersHeader}>
        {/* Left: Filter icon + title */}
        <div className={styles.filterInfo}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={styles.filterIcon}
          >
            <path
              d="M5 4h10M3 8h14M4 12h12M6 16h8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.filterTitle}>筛选条件</span>
          {hasActiveFilters && (
            <span className={styles.activeCount}>({getActiveFilterCount()})</span>
          )}
        </div>

        {/* Center: Vehicle type buttons */}
        <div className={styles.tagGroup}>
          {VEHICLE_TYPES.map((type) => (
            <button
              key={type.value}
              className={`${styles.tagButton} ${filters.vehicleType === type.value ? styles.active : ''}`}
              onClick={() => handleVehicleTypeChange(type.value)}
              disabled={loading}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Right: Price dropdown with actions */}
        <div className={styles.filterActions}>
          <div className={styles.selectWrapper}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={styles.selectFilterIcon}
            >
              <path
                d="M5 4h10M3 8h14M4 12h12M6 16h8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <select
              className={styles.select}
              value={filters.priceRange}
              onChange={(e) => handlePriceRangeChange(e.target.value as PriceRange)}
              disabled={loading}
            >
              {PRICE_RANGES.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={styles.selectIcon}
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Toggle button */}
          <button
            className={styles.toggleButton}
            onClick={toggleExpanded}
            disabled={loading}
            title={isExpanded ? '收起筛选' : '更多筛选'}
          >
            <span>{isExpanded ? '收起' : '更多筛选'}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              className={`${styles.toggleIcon} ${isExpanded ? styles.expanded : ''}`}
            >
              <path
                d="M5 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {hasActiveFilters && (
            <button
              className={styles.resetButton}
              onClick={handleReset}
              disabled={loading}
            >
              清除筛选
            </button>
          )}
        </div>
      </div>

      {/* Expandable content */}
      <div className={`${styles.filtersContent} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.filtersGrid}>
          {/* Seats filter */}
          <div className={styles.filterSection}>
            <div className={styles.filterSectionHeader}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={styles.sectionIcon}>
                <path d="M7 9a2 2 0 11-4 0 2 2 0 014 0zm5-5a2 2 0 11-4 0 2 2 0 014 0zM3 13a2 2 0 11-4 0 2 2 0 014 0zm5-5a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor"/>
              </svg>
              <span className={styles.filterLabel}>座位数</span>
            </div>
            <div className={styles.chipGroup}>
              {SEATS_OPTIONS.map((seat) => (
                <button
                  key={seat}
                  className={`${styles.chipButton} ${filters.seats.includes(seat) ? styles.active : ''}`}
                  onClick={() => handleSeatToggle(seat)}
                  disabled={loading}
                >
                  {seat}座
                </button>
              ))}
            </div>
          </div>

          {/* Fuel type filter */}
          <div className={styles.filterSection}>
            <div className={styles.filterSectionHeader}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={styles.sectionIcon}>
                <path d="M12 2a10 10 0 110 20 10 10 0 01-10-2zm1 15h-2v-6H5v-2h4V8l1 1-2 4v4h2v4h-2z" fill="currentColor"/>
              </svg>
              <span className={styles.filterLabel}>燃料类型</span>
            </div>
            <div className={styles.chipGroup}>
              {FUEL_TYPES.map((fuelType) => (
                <button
                  key={fuelType}
                  className={`${styles.chipButton} ${filters.fuelTypes.includes(fuelType) ? styles.active : ''}`}
                  onClick={() => handleFuelTypeToggle(fuelType)}
                  disabled={loading}
                >
                  {fuelType}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
