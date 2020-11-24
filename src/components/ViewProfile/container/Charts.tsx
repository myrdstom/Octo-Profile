import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import pieChart from '../../../helpers/pieChart';
import barChart from '../../../helpers/barChart';
import {stateProps, Props} from '../../../helpers/globalInterfaces';

interface popular {
    name: string;
    stars: number;
}

const Charts: FC<Props> = ({ history }) => {
    let keysArray = [];
    let valuesArray = [];
    const repos = useSelector(
        (state: stateProps) => state.repos,
    );

    useEffect(() => {
        if (repos.repos === null && !repos.loading) {
            history.push('/');
        }
    }, [history, repos.repos, repos.loading]);

    const get_languages = () => {
        const languageArray: Array<string> = [];
        let chars:any = {};
        if (repos.repos) {
            const allRepos = repos.repos;
            for (const repo of allRepos) {
                languageArray.push(repo.language);
            }
            for (let char of languageArray) {
                if (!chars[char]) {
                    chars[char] = 1;
                } else {
                    chars[char]++;
                }
            }
        }
        Object.keys(chars).forEach((key) => {
            keysArray.push(key);
            valuesArray.push(chars[key]);
        });
        let finalArray = [];

        for (const element in chars) {
            if (element !== 'null') {
                finalArray.push({ name: `${element}`, y: chars[element] });
            }
        }
        return finalArray;
    };
    let names: Array<string> = [];
    let stars: Array<number> = [];

    const get_popularity = () => {
        const popularArray: popular[] = [];
        if (repos.repos) {
            const allRepos = repos.repos;
            for (const repo of allRepos) {
                popularArray.push({
                    name: repo.name,
                    stars: repo.stargazers_count,
                });
            }
        }
        const sortedArray = popularArray.sort(function(a, b) {
            return b.stars - a.stars;
        });

        const cleanedArray: any = sortedArray.splice(0, 5);
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
            <div className="charts">
                <div className="charts-container">
                    <div className="card">
                        <div className="pie-chart">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={pieChart(languages)}
                            />
                        </div>
                        <div className="pie-chart">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={barChart(names, stars)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;
