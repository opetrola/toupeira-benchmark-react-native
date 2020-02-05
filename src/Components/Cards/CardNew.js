import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native'

export default class CardDiscission extends React.Component {

  openNewTopic = () => { }

  render () {
    return (
      <View style={Styles.cards}>

        <TouchableHighlight
          onPress={this.openNewTopic}
          style={[Styles.cardButtom]}>
          <Text style={Styles.textButtom}>+ Novo Tópico</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => { }}
          style={[Styles.cardButtom]}>
          <Text style={Styles.textButtom}>Reabrir um tópico</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => { }}
          style={[Styles.cardButtom]}>
          <Text style={Styles.textButtom}>Estatisticas</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  cards: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginTop: -10,
    flexWrap: 'wrap'
  },
  cardButtom: {
    padding: 3,
    margin: 3,
    width: (Dimensions.get('screen').width / 2) - 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#654bce'
  },
  textButtom: {
    color: '#fff'
  }
})