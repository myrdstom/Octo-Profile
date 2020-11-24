import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface paginationProps {
    reposPerPage: number;
    totalRepos: number;
    paginate: Function;
    currentPage: number;
    nextPage: Function;
    previousPage: Function;
    firstPage: Function;
    lastPage: Function;
}

const Pagination: FC<paginationProps> = ({
    reposPerPage,
    totalRepos,
    paginate,
    currentPage,
    nextPage,
    previousPage,
    firstPage,
    lastPage
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }
    const pageOne = pageNumbers[0];
    const pageLast = pageNumbers[pageNumbers.length - 1];
    console.log(pageLast);

    return (
        <nav>
            <ul className="wrapper">
                <li>
                    <Link onClick={() => firstPage(pageOne)} to="#">
                        {' '}
                        <i className="fa fa-angle-double-left" />{' '}
                    </Link>
                </li>
                <li>
                    <Link onClick={() => previousPage()} to="#">
                        <i className="fa fa-angle-left" />{' '}
                    </Link>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        {currentPage === number ? (
                            <Link onClick={() => paginate(number)} to="/profile" className="page-link active">
                                {number}
                            </Link>
                        ) : (
                            <Link onClick={() => paginate(number)} to="/profile" className="page-link">
                                {number}
                            </Link>
                        )}
                    </li>
                ))}
                <li>
                    <Link onClick={() => nextPage(pageLast)} to="#">
                        <i className="fa fa-angle-right" />{' '}
                    </Link>
                </li>
                <li>
                    <Link onClick={() => lastPage(pageLast)} to="#">
                        {' '}
                        <i className="fa fa-angle-double-right" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
