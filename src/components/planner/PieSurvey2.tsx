'use client';

import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

export default function PieSurvey2() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasEl.current === null) return;
    const ctx = canvasEl.current.getContext('2d') as CanvasRenderingContext2D;

    const data = {
      labels: [
        'Very Dissatisfied',
        'Dissatisfied',
        'Neutral',
        'Satisfied',
        'Very Satisfied',
      ],
      datasets: [
        {
          label: ' responses',
          data: [27, 17, 28, 21, 11],
          backgroundColor: [
            '#312E81',
            '#4338CA',
            '#4F46E5',
            '#6366F1',
            '#6366F1',
          ],
          hoverOffset: 4,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'bar',
      data,
      options: {
        scales: {
          x: {
            ticks: {
              font: {
                size: 16,
              },
              callback(value) {
                // truncate the labels only in this axis
                // eslint-disable-next-line react/no-this-in-sfc
                const lbl = this.getLabelForValue(value as number);
                if (typeof lbl === 'string' && lbl.length > 10) {
<<<<<<< Updated upstream
                  return `${lbl.substring(0, 20)}...`;
=======
                  return `${lbl.substring(0, 12)}...`;
>>>>>>> Stashed changes
                }
                return lbl;
              },
            },
          },
        },
        plugins: {
          tooltip: {
            titleFont: {
              size: 16,
            },
            bodyFont: {
              size: 16,
            },
          },
          legend: {
            display: false,
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
