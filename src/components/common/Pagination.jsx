import React from 'react';

/**
 * Reusable Pagination Component
 * 
 * Props:
 * - currentPage: number (e.g. 1)
 * - totalResults: number (e.g. 50)
 * - itemsPerPage: number (default 6)
 * - totalPages: number (optional, auto-calculated if not passed)
 * - onPageChange: function(pageNumber)
 * - showResultsCount: boolean (default true)
 * - className: string (optional)
 */
const Pagination = ({
    currentPage = 1,
    totalResults = 0,
    itemsPerPage = 6,
    totalPages: propTotalPages,
    onPageChange,
    showResultsCount = true,
    className = ""
}) => {
    // Calculate total pages
    const totalPages = propTotalPages || Math.ceil(totalResults / itemsPerPage) || 1;

    // Calculate index range for "Showing X to Y of Z results"
    const startIndex = (currentPage - 1) * itemsPerPage;
    const startCount = totalResults === 0 ? 0 : startIndex + 1;
    const endCount = Math.min(startIndex + itemsPerPage, totalResults);

    // If there is only 1 page and no items, or only 1 page without pagination needed
    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            if (onPageChange) {
                onPageChange(page);
            }
        }
    };

    // Generate page numbers with smart ellipsis for large page lists
    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always include first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            // Always include last page
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className={`d-flex flex-wrap align-items-center justify-content-between border-top pt-4 mt-4 gap-3 ${className}`}>
            {/* Results count text */}
            {showResultsCount && (
                <div className="small text-muted">
                    Showing {startCount} to {endCount} of {totalResults} results
                </div>
            )}

            {/* Pagination controls */}
            {totalPages > 1 && (
                <div className="pagination-container d-flex align-items-center gap-1 ms-auto">
                    {/* Previous Button */}
                    <button
                        type="button"
                        className="btn btn-sm btn-light border"
                        disabled={currentPage === 1}
                        onClick={() => handlePageClick(currentPage - 1)}
                        style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((page, index) => {
                        if (page === '...') {
                            return (
                                <span key={`ellipsis-${index}`} className="text-muted px-1">
                                    ...
                                </span>
                            );
                        }

                        const isActive = currentPage === page;

                        return (
                            <button
                                key={`page-${page}`}
                                type="button"
                                className={`page-num border-0 ${isActive ? 'active' : 'bg-transparent'}`}
                                onClick={() => handlePageClick(page)}
                                style={{
                                    cursor: isActive ? 'default' : 'pointer',
                                    fontWeight: isActive ? 600 : 400
                                }}
                            >
                                {page}
                            </button>
                        );
                    })}

                    {/* Next Button */}
                    <button
                        type="button"
                        className="btn btn-sm btn-light border"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageClick(currentPage + 1)}
                        style={{
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                            backgroundColor: currentPage === totalPages ? undefined : 'var(--primary-blue, #0076a8)',
                            color: currentPage === totalPages ? undefined : '#ffffff'
                        }}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pagination;
