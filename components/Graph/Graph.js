import React from 'react';
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Graph() {
    const chartData = {
        options: {
            chart: {
                id: 'area-chart',
                toolbar: {
                    tools: {
                        download: false,
                        selection: false,
                        zoom: false,
                        zoomin: true,
                        zoomout: true,
                        pan: false,
                        reset: false,
                    },
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
            },
            grid: {
                show: false,
            },
            yaxis: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 0,
            },
            legend: {
                show: false,
            },
            colors: ['#00DBBCCC', '#FF8B25'],
            toolbar: {
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: true,
                    zoomout: true,
                    pan: false,
                    reset: false,
                },
            },
        },
        series: [{
            name: 'series1',
            data: [100, 20, 38, 20, 92, 80, 30, 50, 40, 28, 150],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.0,
                    stops: [0, 80, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: "#00DBBCCC",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "#00DBBCCC00",
                            opacity: 0
                        },
                    ]
                }
            },

            markers: {
                show: true,
            },
        }, {
            name: 'series2',
            data: [11, 12, 25, 12, 14, 32, 21, 11, 12, 25, 102],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.0,
                    stops: [0, 80, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: "#FF8B25",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "#FF8B2500",
                            opacity: 0
                        },
                    ]
                }
            },
            markers: {
                show: false,
            },
        }],
    };

    return (
        <div className='flex'>
            <ReactApexChart options={chartData.options} series={chartData.series} type='area' className="w-full" height={650} />
        </div>
    );
}
