import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function Chart(props) {

  //const data = props.data

  // const data = [
  //   { name: '1', value: 400 },
  //   { name: '2', value: 300 },
  //   { name: '3', value: 300 },
  //   { name: '4', value: 200 },
  //   { name: '5', value: 278 },
  //   { name: '6', value: 189 },
  //   { name: '7', value: 189 },
  //   { name: '8', value: 189 },
  //   { name: '9', value: 189 }
  // ];

  const COLORS = ['rgb(58, 22, 126)', "#0088FE", "#00C49F", "#FFBB28", "#FF8042", 'rgb(30, 184, 245)', 'rgb(195, 30, 245)', 'rgb(245, 30, 66)', 'rgb(146, 146, 145)'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ font: 'bold 2vh sans-serif' }}
      >
        {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  let [wrSize, setWrSize] = useState(0)
  let [data, setData] = useState([])

  React.useEffect(() => {
    setWrSize(document.querySelector('.App').offsetWidth * 0.5)
  }, [])

  React.useEffect(() => {
    let arr = []
    arr = props.data.map(item => ({ name: item.number, value: item.count }))
    setData(arr)
  }, [props])


  if (!data.length) { return <h2>No data for this period</h2> }
  else
    return (
      <div className='chart'>
        <PieChart width={wrSize} height={wrSize}>
          <Pie
            data={data}
            cx={'50%'}
            cy={'50%'}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={'100%'}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
}

export default Chart;