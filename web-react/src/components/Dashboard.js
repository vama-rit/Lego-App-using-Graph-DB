import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import TopThemeChart from './TopThemeChart'
import PartCountPerTheme from './PartCountPerTheme'
import MostUsedPartAll from './MostUsedPartColor'
import MostPartPerTheme from './MostPartPerTheme'
import MostColorPerTheme from './MostColorPerTheme'
import SetCountPerYear from './SetCountPerYear'
export default function Dashboard() {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* Top Theme Chart */}
        <Grid item xs={12} md={8} lg={12}>
          <Paper className={fixedHeightPaper}>
            <TopThemeChart />
          </Paper>
        </Grid>
        {/* Part Count Per Theme */}
        <Grid item xs={12} md={5} lg={8}>
          <Paper className={fixedHeightPaper}>
            <PartCountPerTheme />
          </Paper>
        </Grid>
        {/* Most Used Part and Color */}
        <Grid item xs={9} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <MostUsedPartAll />
          </Paper>
        </Grid>
        {/* Most Part Used Per Theme */}
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <MostPartPerTheme />
          </Paper>
        </Grid>
        {/* Most Color Used Per Theme */}
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <MostColorPerTheme />
          </Paper>
        </Grid>
        {/* Trend in number of sets over the years */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SetCountPerYear />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
