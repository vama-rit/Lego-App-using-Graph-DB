import React, { PureComponent } from 'react'
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

const GET_SIM = gql`
  {
    nodesim {
      sourceNode
      similarity
      targetNode
    }
  }
`
// class CustomizedLabel extends PureComponent {
//   render() {
//     const { x, y, stroke, value } = this.props

//     return (
//       <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
//         {value}
//       </text>
//     )
//   }
// }

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    )
  }
}

export default function NodeSimilarityAlgo() {
  const theme = useTheme()

  const { loading, error, data } = useQuery(GET_SIM)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  let simarr = []
  let obj = {}
  data.nodesim.map(
    (row) => (
      (obj = {
        name: row.sourceNode + '-' + row.targetNode,
        count: row.similarity,
      }),
      simarr.push(obj)
    )
  )
  console.log('Sim Arr: ', simarr)
  return (
    <React.Fragment>
      <Title>Node Similarity Graph</Title>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={simarr}
          margin={{
            top: 70,
            right: 10,
            bottom: 90,
            left: 12,
          }}
        >
          <XAxis
            dataKey="name"
            stroke={theme.palette.text.secondary}
            tick={<CustomizedAxisTick />}
          ></XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Node Similarity
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
