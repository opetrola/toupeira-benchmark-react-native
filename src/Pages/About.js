import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated
} from 'react-native'

export default class extends React.Component {

  constructor() {
    super()
    this.opacityAboutPage = new Animated.Value(0)

    Animated.timing(this.opacityAboutPage, {
      toValue: 1,
      duration: 300
    }).start()
  }

  render () {

    const opacityAbout = this.opacityAboutPage.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    return (
      <Animated.View style={[Styles.aboutContainer, { opacity: opacityAbout }]}>

        <Text style={Styles.title}>O que é <Text style={{ color: '#d66400' }}>ShishApp</Text></Text>

        <Text style={Styles.textContent}>
          ShishApp é um aplicativo que reúne elementos de fórum em CHAT, todo voltado ao mundo do Arguile.
          É destinado à Narguileiros que querem comprar produtos, retirar dúvidas, ou simplesmente conhecer um pessoal
          e organizar seu próximo rolê.
        </Text>

      </Animated.View>
    )
  }
}

const Styles = StyleSheet.create({
  aboutContainer: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: (Dimensions.get('screen').height / 6) * 5,
    width: (Dimensions.get('screen').width / 6) * 5,
    alignSelf: 'center',
    marginVertical: (Dimensions.get('screen').height / 6) * .5,
    borderRadius: 20,
    zIndex: 1,
    elevation: 5,
  },
  title: {
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7d7d7d'
  },
  textContent: {
    margin: 20,
    color: '#7d7d7d',
    fontSize: 14,
    textAlign: 'left'
  }
})
