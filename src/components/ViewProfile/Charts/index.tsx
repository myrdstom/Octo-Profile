import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import pieChart from '../../../helpers/pieChart';
import barChart from '../../../helpers/barChart';
import { stateProps, Props } from '../../../helpers/globalInterfaces';
import { SPLICE_REPOS_START_POSITION, SPLICE_REPOS_DELETE_COUNT } from '../../../constants/ViewProfile/charts';
import './charts.css';

interface popular {
    name: string;
    stars: number;
}

interface languageType {
    [key: string]: number;
}
const Charts: FC<Props> = ({ history }) => {
    const [repositoryNames, setRepositoryNames] = useState([]);
    const [repositoryStars, setRepositoryStars] = useState([]);
    const repos = useSelector((state: stateProps) => state.repos);

    const names = [] as any;
    const stars = [] as any;

    useEffect(() => {
        if (repos.repos === null && !repos.loading) {
            history.push('/');
        }
        getPopularRepos();
    }, [history, repos]);

    const getLanguages = () => {
        const userLanguages: Array<string> = [];
        const languages: languageType = {};
        if (repos.repos) {
            const allRepos = repos.repos;
            allRepos.forEach(repo => {
                if (repo.language !== null) {
                    userLanguages.push(repo.language);
                }
            });

            userLanguages.forEach(userLanguage => {
                if (!languages[userLanguage]) {
                    languages[userLanguage] = 1;
                } else {
                    languages[userLanguage]++;
                }
            });
        }

        const sortedUserLanguages: { name: string; y: number }[] = [];

        Object.entries(languages).forEach(value => {
            sortedUserLanguages.push({ name: value[0], y: value[1] });
        });

        return sortedUserLanguages;
    };

    const getPopularRepos = () => {
        const popularRepos: popular[] = [];
        if (repos.repos) {
            const allRepos = repos.repos;
            allRepos.forEach(repo => {
                popularRepos.push({
                    name: repo.name,
                    stars: repo.stargazers_count
                });
            });
        }
        const sortPopularRepos: popular[] = popularRepos
            .sort((a, b) => b.stars - a.stars)
            .splice(SPLICE_REPOS_START_POSITION, SPLICE_REPOS_DELETE_COUNT);

        sortPopularRepos.forEach(popularRepo => {
            names.push(popularRepo.name);
            stars.push(popularRepo.stars);
        });

        setRepositoryNames(names);
        setRepositoryStars(stars);
    };

    return (
        <div>
            <div className="charts">
                <div className="charts-container">
                    <div className="card">
                        <div className="pie-chart">
                            <HighchartsReact highcharts={Highcharts} options={pieChart(getLanguages() as any)} />
                        </div>
                        <div className="pie-chart">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={barChart(repositoryNames, repositoryStars)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;
