import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RepoItems, { repoItems } from '../Presenter/RepoItems';
import Pagination from '../Presenter/Pagination';
import { History, LocationState } from 'history';
import {stateProps} from '../../../helpers/globalInterfaces';

interface Props{
    history: History<LocationState>;
    repos: stateProps
}

const ReposView: FC<Props>= ({ history }) => {
    let repositories: repoItems[] = [];
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(6);

    const repos = useSelector((state: stateProps) => state.repos);

    useEffect(() => {
        if (repos.repos === null && !repos.loading) {
            history.push('/');
        }
    }, [history, repos.repos, repos.loading]);
    const getRepos = () => {
        if (repos.repos) {
            const allRepos = repos.repos;
            for (const repo of allRepos) {
                if (repo?.language !== null) {
                    repositories.push({
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        language: repo.language,
                        size: repo.size,
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                        url: repo.html_url,
                    });
                }
            }
        }
        return repositories;
    };
    getRepos();
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = (pageLast: number) => {
        if (currentPage !== pageLast) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const firstPage = (pageOne: number) => {
        if (currentPage !== 1) {
            setCurrentPage(pageOne);
        }
    };
    const lastPage = (pageLast: number) => {
        setCurrentPage(pageLast)
    };
    return <div>
        <RepoItems repositories={currentRepos}/>
        <Pagination
            reposPerPage={reposPerPage}
            totalRepos={repositories.length}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            previousPage={prevPage}
            firstPage={firstPage}
            lastPage={lastPage}
        />
    </div>;
};

export default ReposView;
