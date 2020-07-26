import React from 'react';
import Pagination from "react-js-pagination";

import './Paginator.scss'

const Paginator = ({length, currentPage, itemsCountPerPage, handlePageChange}) => {
    return (
        <div className="paginator">
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={length}
                onChange={page=> handlePageChange(page)}
                pageRangeDisplayed={5}
                innerClass="paginator__pagination"
                itemClass="paginator__elem"
                activeClass="paginator__elem--active"
                linkClass="paginator__link"
                activeLinkClass="paginator__link--active"
                prevPageText="prev"
                nextPageText="next"
            />
        </div>
    )
};


export default Paginator;