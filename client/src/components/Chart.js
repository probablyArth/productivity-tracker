import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import decideWeek from "../utils/decideWeek";

export default function Chart({data}) {
    const chartData = []

    for (let i=0; i<decideWeek(); i++) {
        if (data.updated[i]){
        chartData.push({week: `Week ${i+1}`, target: data.expected_targets[i], achieved: data.achieved_targets[i], amt: i+1})
    }
    }

    console.log(chartData)

    return (
        <ResponsiveContainer width="50%" aspect={2}>
            <LineChart width={30} height={25} data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="target" stroke="#8884d8" />
                <Line type="monotone" dataKey="achieved" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    )
}