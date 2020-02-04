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

  state = {
    colorTopic: [
      ''
    ]
  }

  changColorTopic = topic => {
    switch (topic) {
      case 'VC':
        return '#f15b5b'
      case 'SP':
        return '#f8bc44'
      case 'CPU':
        return '#34c91d'
      case 'DEV':
        return '#4c86b8'
      case 'OT':
        return '#795CF0'
    }
  }

  changeCategorytitle = topic => {
    switch (topic) {
      case 'VC':
        return 'Placas de vídeo'
      case 'SP':
        return 'Smartphones'
      case 'CPU':
        return 'Processadores'
      case 'DEV':
        return 'Desenvolvimento'
      case 'OT':
        return 'Outra categoria'
    }
  }

  render () {
    return (
      <View style={Styles.cards}>

        <Image
          style={Styles.logoTopic}
          source={this.props.photo} />

        <View style={Styles.topicContentTitle}>
          <Text style={Styles.topicTitle}>{this.props.title.substring(0, 20)}{this.props.title.length >= 20 ? '..' : ''}</Text>
          <Text style={[Styles.topicSubtitle, { backgroundColor: this.changColorTopic(this.props.category) }]}>{this.changeCategorytitle(this.props.category)}</Text>
        </View>

        <View style={Styles.shareContainer}>

          <View style={Styles.shareItens}>
            <Text style={{ fontSize: 10, color: '#b8b8b8' }}>Recursos</Text>
            <Text style={Styles.shareSubtitle}>{this.props.attached}</Text>
          </View>

          <View style={Styles.shareItens}>
            <Text style={{ fontSize: 10, color: '#b8b8b8' }}>Contribuíções</Text>
            <Text style={Styles.shareSubtitle}>{this.props.contrib}</Text>
          </View>

          <View style={Styles.shareItens}>
            <Text style={{ fontSize: 10, color: '#b8b8b8' }}>Data</Text>
            <Text style={Styles.shareSubtitle}>{this.props.date}</Text>
          </View>
        </View>

        <Text style={Styles.eyeCheck}>
          <Icon name="eye" size={25} color={this.props.eyeCheck === '1' ? '#795CF0' : '#dedede'} />
        </Text>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  cards: {
    backgroundColor: '#ffffff',
    width: (Dimensions.get('screen').width / 6) * 5.7,
    height: 130,
    borderRadius: 3,
    elevation: 1.5,
    flexDirection: 'row',
    marginVertical: 5
  },
  topicTitle: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7d7d7d',
    marginLeft: -2,
    maxWidth: (Dimensions.get('screen').width / 6) * 5.7,
    minWidth: (Dimensions.get('screen').width / 6) * 5.7
  },
  topicSubtitle: {
    fontSize: 12,
    marginTop: -19,
    fontWeight: 'bold',
    color: '#fff',
    width: 115,
    textAlign: 'center',
    borderRadius: 3,
  },
  logoTopic: {
    width: 50,
    height: 50,
    margin: 13,
    borderRadius: 100,
    borderColor: '#dedede',
    borderWidth: 1.5
  },
  topicContentTitle: {
    flexDirection: 'column',
    height: 80,
    marginTop: -5
  },
  shareContainer: {
    flexDirection: 'row',
    marginTop: 78,
    justifyContent: 'space-between',
    marginLeft: ((Dimensions.get('screen').width / 6) * 7.16) * -1,
    maxWidth: (Dimensions.get('screen').width / 6) * 5.3,
    minWidth: (Dimensions.get('screen').width / 6) * 5.3
  },
  shareItens: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7d7d7d',
    marginHorizontal: 17,
    alignSelf: 'flex-start'
  },
  shareSubtitle: {
    color: '#000',
    fontSize: 15
  },
  eyeCheck: {
    position: 'absolute',
    right: 20,
    top: 15
  }
})