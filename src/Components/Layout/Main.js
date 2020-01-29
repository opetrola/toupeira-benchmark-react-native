import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Alert
} from 'react-native'

import Logo from '../../Assets/Icons/ic_launcher.png'

import If from '../Auxiliary/if';
import About from '../../Pages/About';
import Header from './Header';
import Login from '../../Pages/Login'

export default class extends React.Component {

  constructor() {
    super()
    this.moveMainPage = new Animated.Value(0)
    this.opacityMainPage = new Animated.Value(0)
    this.afterMainPage = new Animated.Value(0)
  }

  state = {
    isLogoff: true,
    showAbout: false
  }

  doLogin = () => {
    this.moveMain(1)
    this.setState({ isLogoff: false })
  }

  logoutConfirm = () => {
    this.setState({ isLogoff: true })
    this.props.navigation.navigate('SplashScreen')
  }

  doLogout = () => {
    let context = this
    Alert.alert(
      'Atenção!',
      'Você tem certeza que deseja sair?',
      [{
        text: 'Cancelar',
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => context.logoutConfirm(),
        style: 'default'
      }]
    )
  }

  moveMain () {
    let context = this

    Animated.timing(context.opacityMainPage, {
      toValue: 1,
      duration: 300,
      ease: Easing.ease
    }).start(() => {
      Animated.timing(this.moveMainPage, {
        toValue: 1,
        duration: 400
      }).start(() => {
        Animated.timing(context.afterMainPage, {
          toValue: 1,
          duration: 400
        }).start()
      })
    })
  }

  toAbout = (showAbout) => {
    this.moveMain()
    this.setState({ isLogoff: false })
    setInterval(() => {
      this.setState({ showAbout })
    }, 700)
  }

  render () {

    const stick = this.moveMainPage.interpolate({
      inputRange: [0, 1],
      outputRange: [
        Dimensions.get('screen').height / 2,
        Dimensions.get('screen').height
      ]
    })

    const slideUp = this.moveMainPage.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (Dimensions.get('screen').height / 4) * 2,
        (Dimensions.get('screen').height / 4) * .5,
      ]
    })

    const opacityBefore = this.opacityMainPage.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    return (
      <View style={Styles.bgContainer}>

        <Header
          isLogged={!this.state.isLogoff}
          doLogout={this.doLogout} />

        <Login
          isLogged={!this.state.isLogoff}
          doLogin={this.doLogin}
          toAbout={this.toAbout} />


        <Animated.View style={[Styles.detailContainer, {
          height: stick,
          top: slideUp
        }]}>

          <Animated.Image
            source={Logo}
            style={[Styles.logo, { opacity: opacityBefore }]} />

        </Animated.View>

        <If test={this.state.showAbout}>
          <About />
        </If>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#d66400',
  },
  detailContainer: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: -40
  }
})
