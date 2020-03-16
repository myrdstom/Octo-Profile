import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Repos from '../Presenter/Repos';
import PaginationView from './PaginationsView';

const ReposView = ({ history, repos }) => {
    let repositories = [];
    const [githubRepos, setGihubRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage, setReposPerPage] = useState(6);
    const [window, setWindow] = useState(2);
    const [activeStyle, setActiveStyle] = useState({
        color: '#333',
        bgColor: '#eee',
    });

    useEffect(() => {
        if (repos.repos === null && repos.loading === false) {
            history.push('/');
        }
    }, [history, repos.repos, repos.loading]);
    const getRepos = () => {
        if (repos.repos) {
            const allRepos = repos.repos;
            allRepos.forEach(repo => {
                if (repo.language !== null) {
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
            });
        }
        return repositories;
    };
    getRepos();
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        setActiveStyle({
            color: '#fff',
            bgColor: '#1a1e22',
        });
    };

    const nextPage = (pageLast) => {
        if (currentPage !== pageLast) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const firstPage = (pageOne) => {
        if (currentPage !== 1) {
            setCurrentPage(pageOne);
        }
    };
    const lastPage = (pageLast) => {
        setCurrentPage(pageLast)
    };
    return (
        <div>
            <Repos repositories={currentRepos} />
            <PaginationView
                reposPerPage={reposPerPage}
                totalRepos={repositories.length}
                paginate={paginate}
                activeStyle={activeStyle}
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={prevPage}
                firstPage={firstPage}
                lastPage={lastPage}
            />
        </div>
    );
};

ReposView.propTypes = {
    repos: PropTypes.object,
};

const mapStateToProps = state => ({
    repos: state.repos,
});

export default connect(mapStateToProps)(withRouter(ReposView));
