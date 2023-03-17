import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

const WhiteTextTypography = withStyles({
  root: {
    color: 'Blue',
  },
})(Typography)

const GET_COUNT_QUERY = gql`
  {
    mostUsedPartAll
    mostUsedColorAll
  }
`

export default function Deposits() {
  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Most Used In All Themes</Title>
      <Typography variant="h6"> ----Part---- </Typography>
      <WhiteTextTypography component="p" variant="h6">
        {loading ? 'Loading...' : data.mostUsedPartAll}
      </WhiteTextTypography>
      <Typography variant="h6"> ----Color---- </Typography>
      <WhiteTextTypography component="p" variant="h6">
        {loading ? 'Loading...' : data.mostUsedColorAll}
      </WhiteTextTypography>
    </React.Fragment>
  )
}
