import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import React from "react";

const AirQualityPieChart = ({aqius}) => {

  const color = (aqius) => {
    // switch (aqius) {
      if (aqius < 50)
        return ["#f1f1f1", "#89e8b0"];
      if (aqius < 100)
        return ["#f1f1f1", "#FFC371"];
      if (aqius < 150)
        return ["#f1f1f1", "#FF5E62"];
      if (aqius < 200)
        return ["#f1f1f1", "#E5124F"];
  }

  const data = [
    { name: 'Total', value: 200 - aqius }, 
    { name: 'AqiUS', value: aqius }
  ]
    
  return (
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="80%"
            startAngle={0}
            endAngle={180}
            innerRadius={100}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={color(aqius)[index % color(aqius).length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}


export default AirQualityPieChart; 