import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native'

export default class Benchmarks extends React.Component {

  render () {
    return (
      <View style={Styles.mainContainer}>

        <View style={Styles.cards}>
          <Text>Benchmark</Text>
        </View>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('screen').width,
    height: (Dimensions.get('screen').height / 6) * 5,
    top: (Dimensions.get('screen').height / 4) * .47,
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  cards: {
    elevation: 5,
    backgroundColor: '#ffffff',
    width: (Dimensions.get('screen').width / 6) * 5,
    height: 150,
    borderRadius: 8
  }
})
