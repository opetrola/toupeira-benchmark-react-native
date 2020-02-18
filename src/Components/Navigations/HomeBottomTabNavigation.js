import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFa5 from 'react-native-vector-icons/FontAwesome5'

import DiscussionsPage from '../../Pages/Home/DiscussionsPage'
import Benchmark from '../../Pages/Home/Benchmark'
import RoomsPage from '../../Pages/Home/RoomsPage'

const TabNavigation = createBottomTabNavigator({

  DiscussionsPage: {
    screen: DiscussionsPage,
    navigationOptions: {
      title: 'Meus',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="comments"
          size={25}
          color={tintColor} />
      )
    }
  },

  RoomsPage: {
    screen: RoomsPage,
    navigationOptions: {
      title: 'Salas',
      tabBarIcon: ({ tintColor }) => (
        <IconFa5
          name="door-open"
          size={25}
          color={tintColor} />
      )
    }
  },

  Benchmark: {
    screen: Benchmark,
    title: 'Benchmark',
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: '#f66'
      },
      tabBarIcon: ({ tintColor }) => (
        <IconFa5
          name="fire-alt"
          size={25}
          color={tintColor} />
      )
    }
  }

},
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#795CF0'
    }
  })

export default TabNavigation