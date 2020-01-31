import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  Animated,
  Easing
} from 'react-native'

import Spinner from 'react-native-spinkit';

export default SplashScreen = props => {

  const [fadeAnim] = useState(new Animated.Value(0))
  const [bgAnim] = useState(new Animated.Value(0))

  Animated.timing(bgAnim, {
    toValue: 1,
    duration: 400,
    easing: Easing.exp
  }).start()

  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    easing: Easing.ease
  }).start()

  setTimeout(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease
    }).start(() => {
      props.navigation.navigate('Main')
    })
  }, 2500)

  return (
    <View
      style={Styles.bgContainer}>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content" />

      <Animated.View
        style={{
          ...props.style,
          width: 100,
          height: 100,
          backgroundColor: '#795CF0',
          position: 'absolute',
          borderRadius: 100,
          transform: [
            {
              scaleX: bgAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 15]
              })
            },
            {
              scaleY: bgAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 15]
              })
            }
          ]
        }}>
      </Animated.View>

      <Animated.View style={{
        ...props.style,
        opacity: fadeAnim
      }}>

        <Text style={Styles.splashLogo}>
          TOU<Text style={{ color: 'rgba(0, 0, 0, .5)' }}>PEIRA</Text>
        </Text>

        <Spinner
          color='#ffffff'
          type='ThreeBounce'
          size={60}
          style={Styles.spinner} />

      </Animated.View>
    </View >
  )
}

const Styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#f5f5f5',
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashLogo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f5f5f5',
  },
  spinner: {
    alignSelf: 'center'
  }
})
