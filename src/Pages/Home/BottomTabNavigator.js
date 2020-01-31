import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Discurssion from './Discussion'
import Benchmarks from './Benchmarks'
import Perfil from './Perfil'

// create our app's navigation stack
const BottomTabNavigator = createBottomTabNavigator({
  Discurssion: Discurssion,
  Benchmarks: Benchmarks,
  Perfil: Perfil
}, {
  tabBarOptions: {
    showIcon: false,
    activeTintColor: '#795CF0',
    labelStyle: {
      fontSize: 13,
    }
  }
})

export default BottomTabNavigator  