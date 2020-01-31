import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import BottomTabNavigator from './Home/BottomTabNavigator'

const HomeContainer = createAppContainer(
  createSwitchNavigator({
    Main: BottomTabNavigator
  })
)

export default HomeContainer