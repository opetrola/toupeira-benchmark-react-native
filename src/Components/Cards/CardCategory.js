import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native'

export default class CardDiscission extends React.Component {
  render () {
    return (
      <View style={Styles.cards}>

        <Text style={Styles.cardTitle}>Filtro por: </Text>

        <TouchableHighlight
          style={Styles.cardButtom}>
          <Text style={Styles.textButtom}>VC</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={Styles.cardButtom}>
          <Text style={Styles.textButtom}>SP</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={Styles.cardButtom}>
          <Text style={Styles.textButtom}>DEV</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={Styles.cardButtom}>
          <Text style={Styles.textButtom}>OT</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={Styles.cardButtom}>
          <Text style={Styles.textButtom}>CPU</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={Styles.cardButtom}>
          <Text style={Styles.textButtom}>N/A</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  cards: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginTop: -10,
    flexWrap: 'wrap'
  },
  cardTitle: {
    color: '#7d7d7d',
    fontSize: 15
  },
  cardButtom: {
    padding: 1,
    margin: 3,
    width: (Dimensions.get('screen').width / 6.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#654bce'
  },
  textButtom: {
    color: '#fff'
  }
})