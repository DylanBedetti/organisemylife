import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import ListLineCharts from './ListLineCharts'
import ListDoughnutChart from './ListDoughnutChart'
import { fetchListItems } from '../../actions'

const Charts = (props) => {
  const { fetchListItems } = props

  useEffect(() => {
    fetchListItems()
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <ListLineCharts />
        <br />
        <ListDoughnutChart />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  )
}

export default connect(null, { fetchListItems })(Charts)
