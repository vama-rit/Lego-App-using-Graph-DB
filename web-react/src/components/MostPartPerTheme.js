import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'
import { withStyles } from '@material-ui/core/styles'

const StyledTableCell = withStyles({
  root: {
    color: 'blue',
  },
})(TableCell)

const GET_MOST_PART_QUERY = gql`
  {
    mostUsedPart {
      theme
      mostUsed
    }
  }
`

export default function MostPartPerTheme() {
  const { loading, error, data } = useQuery(GET_MOST_PART_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Most Used Part Per Theme</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Theme</StyledTableCell>
            <StyledTableCell>Part Most Used</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.mostUsedPart.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.theme}</TableCell>
              <TableCell>{row.mostUsed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
