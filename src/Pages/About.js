import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  View,
  Linking,
  TouchableOpacity,
  FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class About extends React.Component {

  constructor() {
    super()
    this.opacityAboutPage = new Animated.Value(0)

    Animated.timing(this.opacityAboutPage, {
      toValue: 1,
      duration: 300
    }).start()
  }

  openLink = link => {
    Linking
      .openURL(link)
      .catch(err => console.error('An error occurred', err));
  }

  render () {

    const opacityAbout = this.opacityAboutPage.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    return (
      <Animated.View style={[Styles.aboutContainer, { opacity: opacityAbout }]}>

        <Text style={Styles.title}>O que é o <Text style={{ color: '#795CF0' }}>TOUPEIRA</Text></Text>
        <Text style={Styles.subtitle}>Sobre</Text>

        <Text style={Styles.textContent}>
          <Text style={{ color: '#795CF0' }}>Toupeira Benchmark</Text> é um aplicativo que reúne elementos de <Text style={{ color: '#795CF0' }}>fórum em CHAT</Text>,
          todo voltado à benchmark de hardware, software e diversos no mundo da tecnologia. É destinado à todos que querem comprar produtos, retirar dúvidas,
          ou simplesmente Encontrar aquele pessoal pra jogar.
        </Text>

        <View style={Styles.releaseNotes}>

          <Text style={{ color: '#795CF0', fontSize: 16 }}>Releases:</Text>

          <FlatList
            data={
              [
                { key: '* Primeira release e abertura do open beta para o público da google play.' },
                { key: '* Abertura do Evento de lançamento' },
                { key: '* Atualização disponível (TBM0402202001)' }
              ]
            }

            renderItem={({ item }) => <Text style={Styles.item}>{item.key}</Text>}
          />

        </View>

        <View style={Styles.textVersion}>

          <View style={Styles.iconGroup}>

            <TouchableOpacity onPress={() => this.openLink('https://github.com/P37R0L4')}>
              <Icon
                style={Styles.socialIcons}
                name="github" size={25}
                color="#000000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.openLink('https://www.linkedin.com/in/lucas-henrique-novais-de-araujo-petrola-559262123/')}>
              <Icon
                style={Styles.socialIcons}
                name="linkedin"
                size={25}
                color="#000000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.openLink('https://www.npmjs.com/~lucao.gadget')}>
              <Icon
                style={Styles.socialIcons}
                name="npm"
                size={25}
                color="#000000" />
            </TouchableOpacity>

          </View>

          <Text>Versão: 1.0.0</Text>
          <Text>Developed by @P37R0L4</Text>

        </View>

      </Animated.View>
    )
  }
}

const Styles = StyleSheet.create({
  aboutContainer: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: (Dimensions.get('screen').height / 6) * 1.7,
    width: (Dimensions.get('screen').width / 6) * 5,
    alignSelf: 'center',
    marginVertical: (Dimensions.get('screen').height / 6) * .7,
    borderRadius: 8,
    zIndex: 1,
    elevation: 1,
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
  },
  textVersion: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    top: Dimensions.get('screen').height - 300,
  },
  socialIcons: {
    fontSize: 50,
    margin: 20
  },
  iconGroup: {
    flexDirection: 'row'
  },
  subtitle: {
    fontSize: 20,
    marginTop: -20,
    marginHorizontal: 27,
    fontWeight: 'bold',
    color: '#dedede'
  },
  item: {
    padding: 10,
    fontSize: 15,
    color: '#7d7d7d'
  },
  releaseNotes: {
    margin: 20
  }
})
