import React from 'react'
import { Line } from 'react-chartjs-2'

import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'

const options = {
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'day'
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 20,
          min: moment().subtract(7, 'days'),
          max: moment().add(1, 'days')
        }
      }
    ]
  }
}

const ListLineCharts = (props) => {
  const { list } = props

  const prepare = () => {
    const prepareLabels = []
    let prepareData = []

    _.mapValues(list, (listitem) => {
      if (listitem.complete) {
        const datetime = listitem.datecomplete * 1000
        let y = 1
        prepareLabels.push(moment(datetime).format('dddd, MMMM Do'))
        if (prepareData.length) {
          prepareData.forEach((data, index) => {
            if (data.t.isSame(datetime, 'day')) {
              y += 1
              prepareData[index].y += 1
            }
          })
        }

        if (y === 1) {
          prepareData.push({ t: moment(datetime), y })
        }
      }
    })

    prepareData = _.orderBy(prepareData, ['t._i'], ['asc'])

    return { prepareLabels, prepareData }
  }
  const { prepareLabels, prepareData } = prepare()

  const data = {
    labels: prepareLabels,
    datasets: [
      {
        label: 'Completed Tasks',
        data: prepareData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      }
    ]
  }
  return <Line data={data} options={options} />
}

const mapStateToProps = (state) => ({
  list: state.list
})

export default connect(mapStateToProps, {})(ListLineCharts)
