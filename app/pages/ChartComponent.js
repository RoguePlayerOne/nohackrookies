import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js'; // Import registerables to register all components

// Register all necessary components
Chart.register(...registerables);

const ChartComponent = () => {
  const chartRef = useRef(null);

  // Config object for the chart
  const config = {
    type: 'bar',
    data: {
      labels: ['CO2 Saved', 'Water Saved', 'Plastic Recycled'],
      datasets: [
        {
          label: 'Expected Levels',
          data: [80, 90, 100], // Example data: Expected levels
          borderColor: 'rgba(255, 99, 132, 1)', // Red color for expected
          backgroundColor: 'rgba(255, 99, 132, 1)', // Semi-transparent red
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
        {
          label: 'Actual Levels',
          data: [70, 85, 95], // Example data: Actual levels
          borderColor: 'rgba(54, 162, 235, 1)', // Blue color for actual
          backgroundColor: 'rgba(54, 162, 235, 1)', // Semi-transparent blue
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        }
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Expected vs Actual: Environmental Impact',
        },
      },
    },
  };

  useEffect(() => {
    // Create chart instance on the ref
    const myChart = new Chart(chartRef.current, config);

    // Clean up on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
