import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  Animated,
  Easing
} from 'react-native'

export default SplashScreen = props => {

  const [fadeAnim] = useState(new Animated.Value(0))
  const [bgAnim] = useState(new Animated.Value(0))

  Animated.timing(bgAnim, {
    toValue: 1,
    duration: 400,
    ease: Easing.exp
  }).start(() => {

    setTimeout(() => {
      props.navigation.navigate('Main')
    }, 100)
  })

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
          opacity: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
          }),
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
