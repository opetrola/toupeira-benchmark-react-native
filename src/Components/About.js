import React from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../Assets/Icons/ic_launcher.png'
import bg from '../Assets/bg/bglogin.jpg'


export default class extends React.Component {
  render () {
    return (
      <View style={Styles.bgContainer}>

        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content" />

        <Text>Sobre</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#d66400',
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
