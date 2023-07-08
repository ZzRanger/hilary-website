import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

export default function Line() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const colors = {
    purple: {
      default: 'rgba(149, 76, 233, 1)',
      half: 'rgba(149, 76, 233, 0.5)',
      quarter: 'rgba(149, 76, 233, 0.25)',
      zero: 'rgba(149, 76, 233, 0)',
    },
    indigo: {
      default: 'rgba(80, 102, 120, 1)',
      quarter: 'rgba(80, 102, 120, 0.25)',
    },
  };

  useEffect(() => {
    if (canvasEl.current === null) return;
    const ctx = canvasEl.current.getContext('2d') as CanvasRenderingContext2D;

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    const labels = [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7',
      'Week 8',
      'Week 9',
      'Week 10',
    ];
    const data = {
      labels: ['2008', '2010', '2012', '2014', '2016'],
      datasets: [
        {
          label: 'Dataset',
          data: [14944, 17128, 19727, 23095, 26797],
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15,
        },
      ],
    };
    const config: ChartConfiguration = {
      type: 'line',
      data,
      options: {
<<<<<<< Updated upstream
        responsive: true,
=======
        maintainAspectRatio: false, // *** Important : this is required or a strange vanishing zoom out effect occurs with the graph.
>>>>>>> Stashed changes

        plugins: {
          title: {
            display: true,
            text: 'UT Dallas Enrollment',
            color: 'white',
            font: {
              size: 30,
              weight: 'normal',
            },
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: { color: 'white' },
            grid: {
              color: () => '#969696',
            },
          },
          y: {
            ticks: { color: 'white' },
            grid: {
              color: () => '#969696',
            },
          },
        },
      },
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <article>
      <canvas ref={canvasEl} className=" w-[54vw]" />
    </article>
  );
}
