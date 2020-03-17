import React from 'react';
import { Link } from 'react-router-dom';

const PaginationView = ({reposPerPage, totalRepos, paginate, currentPage, nextPage, previousPage}) => {
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalRepos/reposPerPage); i++){
        pageNumbers.push(i)

    }
    return (
        <nav>
            <ul className="wrapper">
                <li><Link onClick={() => previousPage()}  to='#'><i className="fa fa-long-arrow-left"/> </Link></li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        {currentPage === number ?
                            <Link onClick={() => paginate(number)} to="/profile" className="page-link active">
                                {number}
                            </Link>
                            :
                            <Link onClick={() => paginate(number)} to="/profile" className="page-link">
                                {number}
                            </Link>
                        }
                    </li>
                ))

                }
                <li><Link onClick={() => nextPage()} to='#'><i className="fa fa-long-arrow-right"/> </Link></li>
            </ul>
        </nav>
    )


}

export default PaginationView;