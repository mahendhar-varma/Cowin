import './index.css'
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props

  return (
    <PieChart
      width="100%"
      height={500}
      margin={{
        bottom: 223,
      }}
    >
      <Pie
        cx="50%"
        cy="50%"
        data={data}
        outerRadius="50%"
        innerRadius="30%"
        startAngle={0}
        endAngle={360}
        dataKey="count"
      >
        <Cell name="18-44" fill="#2d87bb" />
        <Cell name="45-60" fill="#a3df9f" />
        <Cell name="Above 60" fill="#64c2a6" />
      </Pie>
      <Legend iconType="circle" align="center" verticalAlign="middle" />
    </PieChart>
  )
}

export default VaccinationByAge
