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

const GET_DATA_QUERY = gql`
  {
    partCount {
      name
      count
      distinctCount
    }
  }
`

export default function PartCountPerTheme() {
  const theme = useTheme()

  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Total number of parts and distinct parts in themes</Title>
      <ResponsiveContainer>
        <LineChart
          data={data.partCount}
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
          <Line dataKey="count" stroke="red" activeDot={{ r: 8 }} />
          <Line dataKey="distinctCount" stroke="blue" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
