import dynamic from 'next/dynamic';
import React from 'react';
import styles from "@/styles/Dashboard.module.css";

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function Linecharts () {
  const options: ApexChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        columnWidth: '40%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'right',
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    colors: ['#471C8F', '#E17396'],
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT',
      ],
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
   
  };

 

  const series = [
    {
      name: 'Clicks',
      data: [44, 55, 41, 67, 22, 43, 23, 20, 8, 20],
    },
    {
      name: 'Distribution',
      data: [13, 23, 20, 8, 13, 27, 55, 41, 67, 22,],
    },
    
  ];

  return (
    <div id="chart">
      <ApexChart options={options} series={series} type="bar" height={300} className={styles.piecharts}/>
    </div>
  );
};
