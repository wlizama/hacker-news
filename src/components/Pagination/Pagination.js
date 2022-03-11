import React from 'react'
import {usePagination, DOTS} from './usePagination';
import './Pagination.scss';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination(
        {currentPage, totalCount, siblingCount, pageSize}
    );

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={`Pagination ${className ? className : ''}`}>
            <li
                className={`Pagination__item ${currentPage === 1 ? 'Pagination__item--disabled' : ''}`}
                onClick={onPrevious}>
                <div className="Pagination__item-arrow Pagination__item-arrow--left"/>
            </li>
            {
                paginationRange.map((pageNumber, idx) => {
                    if (pageNumber === DOTS) {
                        return <li key={idx} className="Pagination__item Pagination__item-dots">&#8230;</li>;
                    }

                    return (
                        <li
                            key={idx}
                            className={`Pagination__item ${pageNumber === currentPage ? 'Pagination__item--selected' : ''}`}
                            onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </li>
                    );
                })
            }
            <li
                className={`Pagination__item ${currentPage === lastPage ? 'Pagination__item--disabled' : ''}`}
                onClick={onNext}>
                <div className="Pagination__item-arrow Pagination__item-arrow--right"/>
            </li>
        </ul>
    );
};
export default Pagination