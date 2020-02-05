import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Alert
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../Assets/Icons/ic_launcher.png'
import If from '../Auxiliary/if';
import About from '../../Pages/About';
import Header from './Header';
import Login from '../../Pages/Login'
import Home from '../../Pages/Home'

export default class Main extends React.Component {

  constructor() {
    super()
    this.moveMainPage = new Animated.Value(0)
    this.opacityMainPage = new Animated.Value(0)
  }

  state = {
    isLogoff: true,
    showAbout: false,
    showLogin: false
  }

  doLogin = () => {
    this.moveMain()
    this.setState({ isLogoff: false })
    this.setState({ showLogin: true })
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
      duration: 300
    }).start(() => {
      Animated.timing(context.moveMainPage, {
        toValue: 1,
        duration: 340,
        delay: 230,
        ease: Easing.exp
      }).start()
    })
  }

  toAbout = () => {
    this.moveMain()
    this.setState({ isLogoff: false })
    setInterval(() => {
      this.setState({ showAbout: true })
    }, 500)
  }

  toRouteAnotherPage = (page) => {
    this.props.navigation.navigate(page)
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
        (Dimensions.get('screen').height / 4) * .8,
      ]
    })

    const opacityBefore = this.opacityMainPage.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    return (
      <View style={Styles.bgContainer}>
        <LinearGradient
          start={{ x: 0, y: 1.25 }} end={{ x: 1, y: 0 }}
          locations={[.2, .8, 1]}
          colors={this.state.isLogoff ? ['#5db5f0', '#b85abd', '#ff42a7'] : ['#fff', '#fff', '#fff']}>
          <Header
            isLogged={!this.state.isLogoff}
            doLogout={this.doLogout}
            showAbout={this.state.showAbout}
            toRouteAnotherPage={this.toRouteAnotherPage} />

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

            <If test={!this.state.isLogoff && this.state.showLogin}>
              <View style={Styles.home}>
                <Home />
              </View>
            </If>

          </Animated.View>

          <If test={this.state.showAbout}>
            <About />
          </If>

        </LinearGradient>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#795CF0'
  },
  detailContainer: {
    backgroundColor: 'hsla(0,0%,100%,.96)',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: -40
  },
  home: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    marginTop: ((Dimensions.get('screen').height / 4) * 1) * -1,
  }
})
