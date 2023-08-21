import './index.css'
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props

  return (
    <PieChart
      width="100%"
      height={500}
      margin={{
        bottom: 123,
      }}
    >
      <Pie
        cx="50%"
        cy="50%"
        data={data}
        outerRadius="50%"
        innerRadius="30%"
        startAngle={0}
        endAngle={180}
        dataKey="count"
      >
        <Cell name="Male" fill="#f54394" />
        <Cell name="Female" fill="#2d87bb" />
        <Cell name="Others" fill="#64c2a6" />
      </Pie>
      <Legend iconType="circle" align="center" verticalAlign="middle" />
    </PieChart>
  )
}

export default VaccinationByGender
