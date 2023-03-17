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

const GET_LOUVAIN = gql`
  {
    louvain {
      name
      communityId
      intermediateCommunityIds
      nodeId
    }
  }
`
export default function LouvainAlgo() {
  const { loading, error, data } = useQuery(GET_LOUVAIN)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Louvain Community Algo</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Community Id</StyledTableCell>
            <StyledTableCell>Intermediate Community Ids</StyledTableCell>
            <StyledTableCell>Node Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.louvain.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.communityId}</TableCell>
              <TableCell>
                {row.intermediateCommunityIds.map((rowint) => rowint + ' ')}
              </TableCell>
              <TableCell>{row.nodeId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
