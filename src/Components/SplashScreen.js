import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  Animated,
  ActivityIndicator
} from 'react-native'


export default SplashScreen = props => {

  const [fadeAnim] = useState(new Animated.Value(0))

  toLoginPage = () => {

  }

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 100,
      }
    ).start()
  }, [])

  return (
    <View style={Styles.bgContainer}>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content" />
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}>
        <Text style={Styles.splashLogo}>SHISH<Text style={{ color: 'rgba(0, 0, 0, .5)' }}>APP</Text></Text>
        <ActivityIndicator
          size='large'
          color='#ffffff'/>
      </Animated.View>

    </View >
  )
}

const Styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#d66400',
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashLogo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom:30
  }
})
