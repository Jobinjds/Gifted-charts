import { View, Text } from 'react-native'
import React from 'react'
import Barcharts from './Barcharts'
import Piecharts from './Piecharts'
import DonutCharts from './Donutcharts'

const index = () => {
  return (
    <View>
      <Barcharts/>
      <Piecharts/>
      <DonutCharts/>
    </View>
  )
}

export default index