import React from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Animated
} from 'react-native'

import If from '../Auxiliary/if';
import Icon from 'react-native-vector-icons/FontAwesome'
import bg from '../../Assets/bg/bglogin.jpg'

export default class Header extends React.Component {

  constructor() {
    super()
    this.opacityMainPage = new Animated.Value(0)
    this.afterMainPage = new Animated.Value(0)
  }

  moveMain () {
    var context = this
    Animated.timing(context.opacityMainPage, {
      toValue: 1,
      duration: 200,
    }).start(() => {
      Animated.timing(context.afterMainPage, {
        toValue: 1,
        duration: 200
      }).start()
    })
  }

  render () {

    const opacityIn = this.afterMainPage.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    const opacityReverse = this.afterMainPage.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    const opacityBefore = this.opacityMainPage.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    if (this.props.isLogged) {
      this.moveMain()
    }

    return (
      <View>

        <StatusBar
          translucent
          backgroundColor="transparent"
          animated
          barStyle={!this.props.isLogged ? 'light-content' : 'dark-content'} />

        <Animated.View style={{ opacity: opacityIn }}>
          <ImageBackground
            source={bg}
            style={Styles.bg} />
        </Animated.View>

        <Animated.View style={[Styles.topBtnGroup, { opacity: opacityBefore }]}>
          <TouchableOpacity>
            <Icon name="share-alt" size={25} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="heart" size={25} color="#ffffff" />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[Styles.topBtnGroup, {
          opacity: opacityReverse,
          justifyContent: !this.props.showAbout ? 'flex-end' : 'space-between'
        }]}>
          <If test={!this.props.showAbout}>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Icon name="search" size={25} color={this.props.isLogged ? '#795CF0' : '#fff'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.props.doLogout}>
              <Icon name="sign-out" size={25} color={this.props.isLogged ? '#795CF0' : '#fff'} />
            </TouchableOpacity>
          </If>

          <If test={this.props.showAbout}>
            <TouchableOpacity
              onPress={() => this.props.toRouteAnotherPage('TransitionScreen')}>
              <Icon name="arrow-left" size={25} color={this.props.isLogged ? '#795CF0' : '#fff'} />
            </TouchableOpacity>
          </If>

        </Animated.View>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginTop: -40
  },
  bg: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('screen').height / 2) + 40,
    position: 'absolute',
    opacity: .2
  },
  topBtnGroup: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 50,
    paddingHorizontal: 20,
  }
})
