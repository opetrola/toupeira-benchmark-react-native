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

        <Image
          style={Styles.logoTopic}
          source={this.props.photo} />

        <View style={Styles.topicContentTitle}>
          <Text style={Styles.topicTitle}>{this.props.title}</Text>
          <Text style={Styles.topicSubtitle}>{this.props.subtitle}</Text>
        </View>

        <View style={Styles.shareContainer}>

          <Text style={Styles.shareItens}>
            <Icon name="share-alt" size={25} color="#498ad4" /> {this.props.share}
          </Text>

          <Text style={Styles.shareItens}>
            <Icon name="heart" size={25} color="#f15b5b" /> {this.props.like}
          </Text>

          <Text style={Styles.shareItens}>
            <Icon name="comments" size={25} color="#795CF0" />{this.props.contrib}
          </Text>
        </View>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  cards: {
    elevation: 5,
    backgroundColor: '#ffffff',
    width: (Dimensions.get('screen').width / 6) * 5.4,
    height: 140,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    marginVertical: 7
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
  },
  shareContainer: {
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    flexDirection: 'row',
    marginTop: 80,
    marginLeft: -(Dimensions.get('screen').width / 6) * 3.5,
    borderRadius: 30
  },
  shareItens: {
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
    color: '#7d7d7d',
    marginHorizontal: 20,
    paddingVertical: 10
  }
})