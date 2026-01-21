import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Expertise %",
        type: "column",
        data: [80, 53, 91, 98, 65, 99, 88, 100],
      },
      
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      labels: [
        "Web Design (UI/UX)",
        "Email Template Design",
        "Frontend Development",
        "Responsive Design",
        "Website Redesign",
        "Landing Page Development",        
        "Website Optimization",
        "SEO Optimization",
      ],
      yaxis: [
        {
          title: {
            text: "Expertise in percentage (%)",
          },
        },
        
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={360}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
