import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Image
} from 'react-native'

import Logo from '../../Assets/image-samples/pp.jpg';

export default class Discussion extends React.Component {

  constructor() {
    super()
    this.opacitytTransition = new Animated.Value(0)

    setTimeout(() => {
      this.initializeAnimation()
    }, 600)
  }

  initializeAnimation = () => {
    Animated.timing(this.opacitytTransition, {
      toValue: 1,
      duration: 300
    }).start()
  }

  render () {

    const opacityReverse = this.opacitytTransition.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    return (
      <Animated.View style={[Styles.mainContainer, { opacity: opacityReverse }]}>

        <View style={Styles.cards}>

          <Image
            style={Styles.logoTopic}
            source={Logo} />

          <View style={Styles.topicContentTitle}>
            <Text style={Styles.topicTitle}>Titulo do Tópico</Text>
            <Text style={Styles.topicSubtitle}>Tema do tópico</Text>
          </View>

        </View>

      </Animated.View>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('screen').width,
    height: (Dimensions.get('screen').height / 6) * 5,
    top: (Dimensions.get('screen').height / 4) * .47,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cards: {
    elevation: 5,
    backgroundColor: '#ffffff',
    width: (Dimensions.get('screen').width / 6) * 5,
    height: 140,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row'
  },
  topicTitle: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7d7d7d',
    marginLeft: -2
  },
  topicSubtitle: {
    fontSize: 15,
    marginTop: -20,
    fontWeight: 'bold',
    color: '#dedede'
  },
  logoTopic: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 100,
    borderColor: '#dedede',
    borderWidth: 1.5
  },
  topicContentTitle: {
    flexDirection: 'column',
    height: 80,
    marginTop: -5
  }
})
