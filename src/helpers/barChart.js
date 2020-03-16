const barChart = (names=[], stars=[]) => {
    return {
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    legend: {
                        enabled: false
                    }
                }
            }]
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Most starred'
        },
        xAxis: {
            categories: names,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Stars'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Names',
            data: stars

        }]
    }
};



export default barChart;

