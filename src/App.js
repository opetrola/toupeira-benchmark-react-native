import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// import the different screens
import About from './Pages/About'
import Main from './Components/Layout/Main'
import SplashScreen from './Pages/SplashScreen'

// create our app's navigation stack
const RootStack = createSwitchNavigator({
  SplashScreen,
  Main,
  About
})

const App = createAppContainer(RootStack);

export default App