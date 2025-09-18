import { CaretLeft, CaretRight } from 'phosphor-react';

import type { PaginationProps } from './types';

import * as S from './style';

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const numPagesToShow = 2;

    if (totalPages <= numPagesToShow) {
      for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const midPoint = Math.ceil(numPagesToShow / 2);
      const startPage = Math.max(0, currentPage - midPoint);
      const endPage = Math.min(totalPages - 1, startPage + numPagesToShow - 1);

      if (startPage > 0) {
        pageNumbers.push(0);
      }

      if (startPage > 1) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      if (endPage < totalPages - 2) {
        pageNumbers.push(totalPages - 1);
      }
    }

    return pageNumbers;
  };

  return (
    <S.PaginationContainer>
      <S.PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <CaretLeft size={24} />
      </S.PaginationButton>

      {getPageNumbers().map((pageNumber, index) => (
        <S.PaginationButton
          key={index}
          onClick={() =>
            onPageChange(
              typeof pageNumber === 'number' ? pageNumber : currentPage,
            )
          }
          isActive={
            currentPage === pageNumber ||
            (typeof pageNumber === 'string' && currentPage === totalPages)
          }
        >
          {pageNumber === '...' ? '...' : (pageNumber as number) + 1}
        </S.PaginationButton>
      ))}

      <S.PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        <CaretRight size={24} />
      </S.PaginationButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
