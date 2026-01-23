'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import VehicleGrid from './VehicleGrid';
import Footer from './Footer';
import styles from './P2PRentalPage.module.css';

export interface SearchParams {
  location?: string;
  startDate?: string;
  endDate?: string;
}

export default function P2PRentalPage() {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <SearchBar onSearch={handleSearch} />
        <VehicleGrid searchParams={searchParams} />
      </main>
      <Footer />
    </div>
  );
}
