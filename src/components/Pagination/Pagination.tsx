import React from 'react';
import styles from './Pagination.module.scss';
import { PerPageOptions } from '../../utils/PerPageOptions';

type Props = {
  total: number;
  perPage: PerPageOptions;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({ total, perPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / +perPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${styles.paginationArrows} ${styles.paginationLeftArrow}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.isActive : ''}`}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`${styles.paginationButton} ${styles.paginationArrows} ${styles.paginationRightArrow}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
      </button>
    </div>
  );
};
