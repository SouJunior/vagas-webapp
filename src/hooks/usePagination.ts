import { useState, useMemo } from 'react';

interface PaginationResult<T> {
    currentPage: number;
    paginatedItems: T[];
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

const usePagination = <T>(
    items: T[],
    itemsPerPage: number,
): PaginationResult<T> => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const paginatedItems = useMemo(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, items.length);
        const itemsData = items.slice(startIndex, endIndex);
        return itemsData;
    }, [items, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    return {
        currentPage,
        paginatedItems,
        totalPages,
        setCurrentPage,
    };
};

export default usePagination;
