// PieChart.js
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Prob 1", 7],
    ["Prob 2", 4],
    ["Prob 3", 2],
    ["Prob 4", 3]
];

export const options = {
    title: "Issue Analysis Problem Wise",
    colors: ["#007AFF", "#FB8832", "#E6E5E6", "#9013FE"],
};

const PieChart = () => {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"250px"}
        />
    );
};

export default PieChart;
