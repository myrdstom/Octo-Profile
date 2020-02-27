import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import pieChart from '../../../helpers/pieChart';
import barChart from '../../../helpers/barChart';

const Charts = props => {
    const { languages, names, stars } = props;

    return (
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
    );
};

export default Charts;
