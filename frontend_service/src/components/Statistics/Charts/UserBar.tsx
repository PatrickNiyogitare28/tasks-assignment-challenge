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
    { date: "Jan", tasks: 2, users: 1 },
    { date: "Feb", tasks: 0, users: 3 },
    { date: "Mar", tasks: 4, users: 2 },
    { date: "Apr", tasks: 2, users: 2 },
    { date: "May", tasks: 4, users: 1 },
    { date: "Jun", tasks: 5, users: 3 },
    { date: "Jul", tasks: 0, users: 0 },
    { date: "Aug", tasks: 2, users: 4 },
    { date: "Sep", tasks: 6, users: 5 },
    { date: "Oct", tasks: 1, users: 2 },
    { date: "Nov", tasks: 0, users: 0 },
    { date: "Dec", tasks: 0, users: 0 },
  ];
  

Chart.register(CategoryScale);

  // src/components/Chart.tsx



const UserBarChart: React.FC = () => {
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

export default UserBarChart;
