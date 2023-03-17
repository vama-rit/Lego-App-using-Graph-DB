import React from 'react'

import { useQuery, gql } from '@apollo/client'
import Title from './Title'
// import { withStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Label,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

const GET_THEME = gql`
  query($orgName: [String]) {
    themeCost(name: $orgName) {
      theme
      year
      usd
    }
  }
`

export default function ChangeInPrice() {
  const theme = useTheme()

  const { loading, error, data } = useQuery(GET_THEME, {
    variables: { orgName: ['Duplo'] },
  })

  const { loading: loading1, error: error1, data: data1 } = useQuery(
    GET_THEME,
    {
      variables: { orgName: ['Friends'] },
    }
  )

  const { loading: loading2, error: error2, data: data2 } = useQuery(
    GET_THEME,
    {
      variables: { orgName: ['Star Wars'] },
    }
  )

  const { loading: loading3, error: error3, data: data3 } = useQuery(
    GET_THEME,
    {
      variables: { orgName: ['Ninjago'] },
    }
  )

  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  if (error1) return <p>Error</p>
  if (loading1) return <p>Loading</p>

  if (error2) return <p>Error</p>
  if (loading2) return <p>Loading</p>

  if (error3) return <p>Error</p>
  if (loading3) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Change in Price over the years for themes</Title>
      <ResponsiveContainer width="99%" height={200}>
        <LineChart
          data={data.themeCost}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <Title>Change in Price over the years for themes</Title>
          <CartesianGrid />
          <XAxis
            dataKey="year"
            stroke={theme.palette.text.secondary}
            interval={'preserveStartEnd'}
          />

          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Duplo
            </Label>
          </YAxis>

          <Legend />
          <Tooltip />
          <Line dataKey="usd" stroke="red" activeDot={{ r: 8 }}></Line>
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="99%" height={200}>
        <LineChart
          data={data1.themeCost}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="year"
            stroke={theme.palette.text.secondary}
            interval={'preserveStartEnd'}
          />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Friends
            </Label>
          </YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="usd" stroke="blue" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="99%" height={200}>
        <LineChart
          data={data2.themeCost}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="year"
            stroke={theme.palette.text.secondary}
            interval={'preserveStartEnd'}
          />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Star Wars
            </Label>
          </YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="usd" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="99%" height={200}>
        <LineChart
          data={data3.themeCost}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="year"
            stroke={theme.palette.text.secondary}
            interval={'preserveStartEnd'}
          />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Ninjago
            </Label>
          </YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="usd" stroke="orange" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
