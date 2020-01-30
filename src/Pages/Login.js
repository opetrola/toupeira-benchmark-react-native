import React from 'react'
import { Animated } from 'react-native'

import EmailLogin from '../Components/Login/EmailLogin';
import SocialLogin from '../Components/Login/SocialLogin';

export default class extends React.Component {

  constructor() {
    super()
    this.transition = new Animated.Value(0)
  }

  transitionAnimation() {
    Animated.timing(this.transition, {
      toValue: 1,
      duration: 400
    }).start()
  }

  render() {

    const opacityIn = this.transition.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    if (this.props.isLogged) {
      this.transitionAnimation()
    }

    return (
      <Animated.View
        style={{ opacity: opacityIn }}>

        <EmailLogin doLogin={this.props.doLogin} />

        <SocialLogin
          doLogin={this.props.doLogin}
          toAbout={this.props.toAbout} />

      </Animated.View>
    )
  }
}
