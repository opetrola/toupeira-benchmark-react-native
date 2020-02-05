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

import Spinner from 'react-native-spinkit'
import LinearGradient from 'react-native-linear-gradient'

export default SplashScreen = props => {

  const [fadeAnim] = useState(new Animated.Value(0))
  const [bgAnim] = useState(new Animated.Value(0))

  Animated.timing(bgAnim, {
    toValue: 1,
    duration: 250,
    easing: Easing.exp
  }).start()

  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 650,
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
  }, 3500)

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
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          locations={[.4, 1]}
          colors={['#795CF0', '#5db5f0']}
          style={Styles.bgContainer}>

          <Text style={Styles.splashLogo}>
            TOU<Text style={{ color: '#fff', transform: [{ rotateX: '90deg' }] }}>PEIRA</Text>
          </Text>

          <Spinner
            color='#ffffff'
            type='ThreeBounce'
            size={60}
            style={Styles.spinner} />
        </LinearGradient>


      </Animated.View>
    </View >
  )
}

const Styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashLogo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  spinner: {
    alignSelf: 'center'
  }
})
