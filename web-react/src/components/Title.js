import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const WhiteTextTypography = withStyles({
  root: {
    color: '#9400d3',
  },
})(Typography)

export default function Title(props) {
  return (
    <WhiteTextTypography component="h2" variant="h5" gutterBottom>
      {props.children}
    </WhiteTextTypography>
  )
}

Title.propTypes = {
  children: PropTypes.node,
}
