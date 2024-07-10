import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Element", "", { role: "style" }],
    ["Prob1", 10.94, "#72FFBB"], // RGB value
    ["Prob1", 10.49, "#72FFBB"], // English color name
    ["Prob1", 19.3, "#72FFBB"],
    ["Prob1", 21.45, "#72FFBB"], // CSS-style declaration
    ["Prob1", 8.94, "#72FFBB"], // RGB value
    ["Prob1", 10.49, "#72FFBB"], // English color name
    ["Prob1", 19.3, "#72FFBB"],
    ["Prob1", 21.45, "#72FFBB"],
];

export function Barchart() {
    const options = {
        title: "Problem Description Wise Action Taken Count",
       
        hAxis: {
            title: "Modal",
            minValue: 0,
        },
        vAxis: {
            title: "Days",
        },
    };

    return (
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="250px"
            data={data}
            options={options}
        />
    );
}

export default Barchart;
