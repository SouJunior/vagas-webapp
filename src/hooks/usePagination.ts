import { useState, useEffect } from 'react';

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
    const [paginatedItems, setPaginatedItems] = useState<T[]>([]);

    useEffect(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, items.length);
        setPaginatedItems(items.slice(startIndex, endIndex));
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
