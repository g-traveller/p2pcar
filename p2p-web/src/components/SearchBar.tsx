'use client';

import styles from './SearchBar.module.css';
import { useState, useMemo } from 'react';
import LocationSelector, { SelectedLocation } from './LocationSelector';

export interface SearchParams {
  location?: SelectedLocation;
  startDate?: string;
  endDate?: string;
}

export interface SearchBarProps {
  onSearch?: (params: SearchParams) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [location, setLocation] = useState<SelectedLocation | undefined>(undefined);

  // 计算默认日期
  const tomorrow = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  }, []);

  const oneWeekLater = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().split('T')[0];
  }, []);

  const [startDate, setStartDate] = useState(tomorrow);
  const [endDate, setEndDate] = useState(oneWeekLater);

  return (
    <div className={styles.searchBar}>
      <div className={styles.container}>
        <h1 className={styles.title}>找到您理想的租车</h1>
        <div className={styles.searchCard}>
          <div className={styles.searchFields}>
            <div className={styles.field}>
              <label className={styles.label}>取车地点</label>
              <LocationSelector
                value={location}
                onChange={setLocation}
                placeholder="请输入或选择取车地点"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>开始日期</label>
              <div className={styles.inputContainer}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a1 1 0 10-2 0v1H7V4a1 1 0 00-1-1zm0 3h8v2H6V6zm0 4h8v6H6v-6z" fill="#6B7280"/>
                </svg>
                <input
                  type="date"
                  className={styles.input}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={tomorrow}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>结束日期</label>
              <div className={styles.inputContainer}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a1 1 0 10-2 0v1H7V4a1 1 0 00-1-1zm0 3h8v2H6V6zm0 4h8v6H6v-6z" fill="#6B7280"/>
                </svg>
                <input
                  type="date"
                  className={styles.input}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate}
                />
              </div>
            </div>
            <button className={styles.searchButton} onClick={() => onSearch?.({ location, startDate, endDate })}>
              <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 119 1a8 8 0 010 16zm0-2A6 6 0 109 3a6 6 0 000 12zm7.07-2.93l-1.41 1.41 3.36 3.36 1.41-1.41-3.36-3.36z" fill="white"/>
              </svg>
              <span>搜索</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
