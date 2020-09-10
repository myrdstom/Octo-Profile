import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Charts from '../Presenter/Charts';

const ChartsView = ({  history }) => {
    let keysArray = [];
    let valuesArray = [];
    const repos = useSelector((state) => state.repos);

    useEffect(() => {
        if (repos.repos === null && repos.loading === false) {
            history.push('/');
        }
    }, [history, repos.repos, repos.loading]);

    const get_languages = () => {
        const languageArray = [];
        let chars = {};
        if (repos.repos) {
            const allRepos = repos.repos;
            allRepos.forEach(repo => {
                languageArray.push(repo.language);
            });
            for (let char of languageArray) {
                if (!chars[char]) {
                    chars[char] = 1;
                } else {
                    chars[char]++;
                }
            }
        }
        Object.keys(chars).forEach((key, index) => {
            keysArray.push(key);
            valuesArray.push(chars[key]);
        });
        let finalArray = [];

        for (const element in chars) {
            if (element !== 'null') {
                finalArray.push({
                    name: `${element}`,
                    y: chars[element],
                });
            }
        }
        return finalArray;
    };
    let names = [];
    let stars = [];

    const get_popularity = () => {
        const popularArray = [];
        if (repos.repos) {
            const allRepos = repos.repos;
            allRepos.forEach(repo => {
                popularArray.push({
                    name: repo.name,
                    stars: repo.stargazers_count,
                });
            });
        }
        const sortedArray = popularArray.sort(function(a, b) {
            return b.stars - a.stars;
        });

        const cleanedArray = sortedArray.splice(0, 5);
        const listContacts = function() {
            for (let i = 0; i < cleanedArray.length; i++) {
                names.push(cleanedArray[i].name);
                stars.push(cleanedArray[i].stars);
            }
        };
        listContacts();
    };
    get_popularity();
    const languages = get_languages();
    return (
        <div>
            <Charts languages={languages} names={names} stars={stars} />
        </div>
    );
};

ChartsView.propTypes = {
    repos: PropTypes.object,
};


export default ChartsView;
