import React from 'react'
import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import LoginPage from '../../Pages/LoginPage'
import SplashScreen from '../../Pages/SplashScreen'
import EmailLoginPage from '../../Pages/EmailLoginPage'
import Home from '../../Pages/Home'

const mainNavigation = createAnimatedSwitchNavigator({

  Main: SplashScreen,
  LoginPage,
  Home,
  EmailLoginPage

}, {

  transition: (
    <Transition.Together>

      <Transition.Out
        type="slide-top"
        durationMs={120}
        interpolation="easeIn" />

      <Transition.In
        type="fade"
        durationMs={500} />

    </Transition.Together>
  )

})

export default createAppContainer(mainNavigation)