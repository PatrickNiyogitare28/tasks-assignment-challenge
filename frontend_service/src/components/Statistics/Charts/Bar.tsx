import React from 'react';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { Bar } from 'react-chartjs-2';

export interface ChartDataItem {
    date: string;
    tasks: number;
    users: number;
}

// src/data.ts

export const chartData: ChartDataItem[] = [
    { date: "Jan", tasks: 5, users: 10 },
    { date: "Feb", tasks: 7, users: 12 },
    { date: "Mar", tasks: 8, users: 15 },
    { date: "Apr", tasks: 10, users: 18 },
    { date: "May", tasks: 12, users: 2 },
    { date: "Jun", tasks: 20, users: 14 },
    { date: "Jul", tasks: 6, users: 4 },
    { date: "Aug", tasks: 5, users: 6 },
    { date: "Sep", tasks: 12, users: 15 },
    { date: "Oct", tasks: 4, users: 1 },
    { date: "Nov", tasks: 0, users: 0 },
    { date: "Dec", tasks: 0, users: 0 },
  ];
  

Chart.register(CategoryScale);

  // src/components/Chart.tsx



const BarChart: React.FC = () => {
  const chartLabels = chartData.map((data: ChartDataItem) => data.date);

  const chartConfig = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Tasks',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: chartData.map((data: ChartDataItem) => data.tasks),
      },
      {
        label: 'Users',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: chartData.map((data: ChartDataItem) => data.users),
      },
    ],
  };

  return (
    <div>
      <Bar data={chartConfig} />
    </div>
  );
};

export default BarChart;
