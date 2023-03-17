import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

import { useQuery, gql } from '@apollo/client'
import Title from './Title'

const GET_COUNT = gql`
  {
    years(options: { sort: { name: ASC } }) {
      name
      itemcount
    }
  }
`

export default function SetCountPerYear() {
  const theme = useTheme()

  const { loading, error, data } = useQuery(GET_COUNT)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Trend in number of Sets over the years</Title>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data.years}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="name"
            stroke={theme.palette.text.secondary}
            interval={'preserveStartEnd'}
          />
          <YAxis stroke={theme.palette.text.secondary} />
          <Legend />
          <Tooltip />
          <Line dataKey="itemcount" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
