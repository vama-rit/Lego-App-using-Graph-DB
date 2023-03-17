import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  LabelList,
  ResponsiveContainer,
  BarChart,
  Legend,
} from 'recharts'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'

const GET_DATA_QUERY = gql`
  {
    setCount {
      name
      count
    }
  }
`

export default function TopThemeChart() {
  const theme = useTheme()

  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>
  console.log('Set Count: ', data.setCount)
  return (
    <React.Fragment>
      <Title>Top 10 themes after 2010</Title>
      <ResponsiveContainer>
        <BarChart
          data={data.setCount}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Set Count
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={theme.palette.primary.main}>
            <LabelList dataKey="count" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
