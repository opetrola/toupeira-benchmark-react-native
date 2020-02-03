import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class CardDiscission extends React.Component {
  render () {
    return (
      <View style={Styles.cards}>

        <Text style={Styles.cardTitle}>Categorias: </Text>

        <View style={Styles.category}>

        </View>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  cards: {
    backgroundColor: '#654bce',
    width: (Dimensions.get('screen').width / 6) * 5.7,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  cardTitle: {
    color: '#ffffff'
  }
})