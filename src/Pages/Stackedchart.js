import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Month", "Closed calls", "Total calls"],
    ["Jan", 81750, 80080],
    ["Feb", 37000, 36000],
    ["March", 26000, 28000],
    ["April", 20990, 95000],
    ["May", 17260, 11000],
    ["June", 15000, 15000],
];

export const options = {
    title: "Call Statistics",

    chartArea: { width: "60%" },
    isStacked: true,
    hAxis: {      
        minValue: 0,
    },
    bar: { groupWidth: "50%" },
    colors: ['#008F53', '#C04C7B']
};

export function Stackedchart() {
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
export default Stackedchart