import React from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ImageBackground
} from 'react-native'

import Logo from '../Assets/Icons/ic_launcher.png'
import bg from '../Assets/bg/bglogin.jpg'


export default class extends React.Component {
  render () {
    return (
      <View style={Styles.bgContainer}>

        <StatusBar
          translucent backgroundColor="transparent"
          barStyle="light-content" />

        <ImageBackground
          source={bg}
          style={Styles.bg} />

        <Text style={Styles.title}>
          SHISH<Text style={{color: 'rgba(0, 0, 0, .5)',}}>APP</Text>
        </Text>
        <View style={Styles.loginContainer}>
          <Image
            source={Logo}
            style={Styles.logo} />

          <Text style={Styles.versionLabel}>Ainda não tem uma conta? <Text style={{ color: '#d66400', textDecorationLine: 'underline' }}>crie Aqui</Text></Text>
        </View>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#d66400',
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    height: (Dimensions.get('screen').height / 3) * 3,
    marginTop: (Dimensions.get('screen').height / 10) * .5,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#ffffff',
    marginTop: -50
  },
  versionLabel: {
    top: (Dimensions.get('window').height / 2) * 1.5,
  },
  title: {
    fontSize: 25,
    color: '#ffffff',
    margin: 30,
    fontWeight: 'bold',
    marginTop: 50
  },
  bg: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('screen').height / 5) * 1.2,
    position: 'absolute',
    opacity: .2
  }
})
