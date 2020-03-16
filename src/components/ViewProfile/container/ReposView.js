import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Repos from '../Presenter/Repos';

const ReposView = ({ repos }) => {
    let repositories = [];
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
                        url: repo.html_url
                    });
                }
            });
        }
        return repositories;
    };
    console.log(getRepos());
    return (
        <div>
            <Repos repositories={repositories} />
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
