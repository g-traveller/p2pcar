'use client';

import { useState, useEffect } from 'react';
import VehicleCard from './VehicleCard';
import { searchVehicles } from '@/services/vehicleApi';
import styles from './VehicleGrid.module.css';

type SortOption = 'recommended' | 'price-low' | 'price-high' | 'rating';

export default function VehicleGrid() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 20;

  useEffect(() => {
    fetchVehicles();
  }, [sortBy, currentPage]);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      setError(null);

      // Map sort option to backend sortBy parameter
      const sortByMap: Record<SortOption, string> = {
        'recommended': 'rating_desc',
        'price-low': 'price_asc',
        'price-high': 'price_desc',
        'rating': 'rating_desc'
      };

      const { vehicles: fetchedVehicles, total: totalCount } = await searchVehicles({
        sortBy: sortByMap[sortBy],
        page: currentPage,
        size: pageSize
      });

      setVehicles(fetchedVehicles);
      setTotal(totalCount);
    } catch (err) {
      console.error('Failed to fetch vehicles:', err);
      setError(err instanceof Error ? err.message : '加载车辆数据失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
    setCurrentPage(0);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(0);
      if (currentPage > 2) pages.push('...');
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages - 2, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 3) pages.push('...');
      pages.push(totalPages - 1);
    }

    return (
      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          上一页
        </button>

        {pages.map((page, index) => {
          if (page === '...') {
            return <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>;
          }
          const pageNumber = page as number;
          return (
            <button
              key={pageNumber}
              className={`${styles.pageButton} ${currentPage === pageNumber ? styles.active : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber + 1}
            </button>
          );
        })}

        <button
          className={styles.pageButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          下一页
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            可租车辆
            <span className={styles.count}>(加载中...)</span>
          </h2>
        </div>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>正在加载车辆数据...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            可租车辆
            <span className={styles.count}>(0)</span>
          </h2>
        </div>
        <div className={styles.errorContainer}>
          <p className={styles.errorText}>{error}</p>
          <button onClick={fetchVehicles} className={styles.retryButton}>
            重新加载
          </button>
        </div>
      </div>
    );
  }

  if (vehicles.length === 0) {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            可租车辆
            <span className={styles.count}>(0)</span>
          </h2>
          <select className={styles.sortSelect} value={sortBy} onChange={handleSortChange}>
            <option value="recommended">推荐排序</option>
            <option value="price-low">价格从低到高</option>
            <option value="price-high">价格从高到低</option>
            <option value="rating">评分最高</option>
          </select>
        </div>
        <div className={styles.emptyContainer}>
          <p className={styles.emptyText}>暂无可用车辆</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.gridContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          可租车辆
          <span className={styles.count}>({total})</span>
        </h2>
        <select className={styles.sortSelect} value={sortBy} onChange={handleSortChange}>
          <option value="recommended">推荐排序</option>
          <option value="price-low">价格从低到高</option>
          <option value="price-high">价格从高到低</option>
          <option value="rating">评分最高</option>
        </select>
      </div>
      <div className={styles.grid}>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      {renderPagination()}
    </div>
  );
}
