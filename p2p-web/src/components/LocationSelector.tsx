'use client';

import { useState, useEffect } from 'react';
import styles from './LocationSelector.module.css';
import { PickupLocation, getActiveLocations } from '@/services/pickupLocationApi';

interface LocationSelectorProps {
  value?: string;
  onChange?: (location: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

interface LocationGroup {
  city: string;
  locations: PickupLocation[];
}

export default function LocationSelector({
  value,
  onChange,
  placeholder = '请选择取车地点',
  disabled = false,
  className = ''
}: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<PickupLocation | null>(null);
  const [groupedLocations, setGroupedLocations] = useState<LocationGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLocations = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getActiveLocations();
        if (response.code === 200 && response.data) {
          // Group locations by city
          const grouped = response.data.reduce((acc, location) => {
            const existingCity = acc.find(g => g.city === location.city);
            if (existingCity) {
              existingCity.locations.push(location);
            } else {
              acc.push({
                city: location.city,
                locations: [location]
              });
            }
            return acc;
          }, [] as LocationGroup[]);

          // Sort cities and locations within each city
          grouped.sort((a, b) => a.city.localeCompare(b.city));
          grouped.forEach(group => {
            group.locations.sort((a, b) => a.displayOrder - b.displayOrder);
          });

          setGroupedLocations(grouped);

          // Find and set initial location if value is provided
          if (value) {
            const initialLocation = response.data.find(loc =>
              loc.address === value || loc.name === value
            );
            if (initialLocation) {
              setSelectedLocation(initialLocation);
            }
          }
        }
      } catch (err) {
        console.error('Failed to load pickup locations:', err);
        setError('加载取车地点失败');
      } finally {
        setIsLoading(false);
      }
    };

    loadLocations();
  }, [value]);

  const handleSelect = (location: PickupLocation) => {
    setSelectedLocation(location);
    onChange?.(location.address);
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (selectedLocation) {
      return `${selectedLocation.district ? selectedLocation.district + ' · ' : ''}${selectedLocation.name}`;
    }
    return placeholder;
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.open : ''} ${disabled ? styles.disabled : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className={styles.value}>
          {isLoading ? '加载中...' : getDisplayValue()}
        </span>
        <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {error && <div className={styles.error}>{error}</div>}

      {isOpen && !isLoading && (
        <div className={styles.dropdown}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="搜索地点..."
              autoFocus
            />
          </div>

          <div className={styles.locationList}>
            {groupedLocations.map((group) => (
              <div key={group.city} className={styles.cityGroup}>
                <div className={styles.cityName}>{group.city}</div>
                {group.locations.map((location) => (
                  <div
                    key={location.id}
                    className={`${styles.locationItem} ${selectedLocation?.id === location.id ? styles.selected : ''}`}
                    onClick={() => handleSelect(location)}
                  >
                    <div className={styles.locationHeader}>
                      <span className={styles.locationName}>{location.name}</span>
                      {location.district && (
                        <span className={styles.locationDistrict}>{location.district}</span>
                      )}
                    </div>
                    <div className={styles.locationAddress}>{location.address}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
