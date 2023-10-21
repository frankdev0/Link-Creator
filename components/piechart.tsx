import dynamic from 'next/dynamic';
import React from 'react';
import styles from "@/styles/Dashboard.module.css";

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function PieChart() {
  const options: ApexPieInterface = {
    chart: {
      id: 'apexchart-example',
    },
    labels: ['Gossip', 'Sport', 'Finance'],
    colors: ['#4339F2', '#FFB200', '#FF3A29'],
    legend: {
      position: 'bottom', // Set the legend position to 'bottom'
    },
    
  };

  const series = [44, 55, 13];

  return (
    <div className={styles.piecharts}>
      <ApexChart type='pie' options={options} series={series} height={300} width={300} />
    </div>
  );
}

interface ApexPieInterface {
  chart: {
    id: string;
  };
  labels: string[];
  colors: string[],
  legend: {
    position: 'bottom' | 'top' | 'right' | 'left' | undefined;
  };
}
