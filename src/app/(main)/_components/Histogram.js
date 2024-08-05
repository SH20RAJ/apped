// components/Histogram.js
"use client";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const Histogram = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [app, setApp] = useState(data);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const histogramData = app.histogram;

    const labels = Object.keys(histogramData);
    const data = Object.values(histogramData);

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Number of Ratings",
            data: data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [app]);

  return <canvas ref={canvasRef} width="400" height="200"></canvas>;
};

export default Histogram;
