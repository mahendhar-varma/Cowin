import './index.css'
import {Bar, BarChart, Legend, XAxis, YAxis} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  const DataFormatter = number => number.toString()

  return (
    <BarChart
      width="100%"
      height={500}
      data={data}
      margin={{
        top: 5,
      }}
    >
      <XAxis
        dataKey="vaccine_date"
        tick={{
          stroke: 'gray',
          strokeWidth: 0,
        }}
      />
      <YAxis
        tickFormatter={DataFormatter}
        tick={{
          stroke: 'gray',
          strokeWidth: 0,
        }}
      />
      <Legend
        wrapperStyle={{
          padding: 30,
        }}
      />
      <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="10%" />
      <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="10%" />
    </BarChart>
  )
}

export default VaccinationCoverage
