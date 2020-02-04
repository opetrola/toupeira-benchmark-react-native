import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Discurssion from './Discussion'
import MyDiscussions from './MyDiscussions'
import Benchmarks from './Benchmarks'
import Perfil from './Perfil'

// create our app's navigation stack
const BottomTabNavigator = createBottomTabNavigator({
  Discurssion: {
    screen: Discurssion,
    navigationOptions: {
      title: 'Recentes',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="comments"
          size={25}
          color={tintColor} />
      )
    }
  },
  MyDiscussions: {
    screen: MyDiscussions,
    navigationOptions: {
      title: 'Meus',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="comment"
          size={25}
          color={tintColor} />
      )
    }
  },
  Benchmarks: {
    screen: Benchmarks,
    navigationOptions: {
      title: 'Benchmark',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="pie-chart"
          size={25}
          color={tintColor} />
      )
    }
  },
  Perfil: {
    screen: Perfil,
    navigationOptions: {
      title: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="user"
          size={25}
          color={tintColor} />
      )
    }
  }
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#795CF0'
  }
})

export default BottomTabNavigator  