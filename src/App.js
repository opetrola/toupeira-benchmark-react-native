import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// import the different screens
import About from './Components/About'
import LoginPage from './Components/LoginPage'
import SplashScreen from './Components/SplashScreen'

// create our app's navigation stack
const RootStack = createSwitchNavigator({
  SplashScreen,
  LoginPage,
  About
})

const App = createAppContainer(RootStack);

export default App