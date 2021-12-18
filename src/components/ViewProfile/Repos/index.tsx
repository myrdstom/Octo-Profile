import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { History } from 'history';
import RepoItems from './RepoItems';
import Pagination from './Pagination';
import { stateProps } from '../../../helpers/globalInterfaces';
import INITIAL_PAGE from '../../../constants/ViewProfile/repos';

interface Props {
    history: History;
}

const ReposView: FC<Props> = ({ history }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(6);
    const [currentRepos, setCurrentRepos] = useState([]);

    const { repos, loading } = useSelector((state: stateProps) => state.repos);

    useEffect(() => {
        if (repos === null && !loading) {
            history.push('/');
        }
    }, [history, repos, loading]);

    useEffect(() => {
        const indexOfLastRepo = currentPage * reposPerPage;
        const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
        setCurrentRepos(repos?.slice(indexOfFirstRepo, indexOfLastRepo) as any);
    }, [repos]);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = (pageLast: number) => {
        if (currentPage !== pageLast) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage !== INITIAL_PAGE) {
            setCurrentPage(currentPage - 1);
        }
    };
    const firstPage = (pageOne: number) => {
        if (currentPage !== INITIAL_PAGE) {
            setCurrentPage(pageOne);
        }
    };
    const lastPage = (pageLast: number) => {
        setCurrentPage(pageLast);
    };

    return (
        <div>
            <RepoItems repositories={currentRepos} />
            <Pagination
                reposPerPage={reposPerPage}
                totalRepos={repos as any}
                paginate={paginate}
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={prevPage}
                firstPage={firstPage}
                lastPage={lastPage}
            />
        </div>
    );
};

export default ReposView;
