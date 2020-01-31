import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// import the different screens
import About from './Pages/About'
import Main from './Components/Layout/Main'
import SplashScreen from './Pages/Transitions/SplashScreen'
import TransitionScreen from './Pages/Transitions/TransitionScreen'

// create our app's navigation stack
const RootStack = createSwitchNavigator({
  SplashScreen,
  Main,
  About,
  TransitionScreen
})

const App = createAppContainer(RootStack);

export default App