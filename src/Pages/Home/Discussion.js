import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Text
} from 'react-native'

import Logo from '../../Assets/image-samples/pp.jpg';
import CardDiscussion from './Discussion/CardDiscussion';
import CardCategory from './Discussion/CardCategory';


export default class Discussion extends React.Component {

  constructor() {
    super()
    this.opacitytTransition = new Animated.Value(0)

    setTimeout(() => {
      this.initializeAnimation()
    }, 600)
  }

  initializeAnimation = () => {
    Animated.timing(this.opacitytTransition, {
      toValue: 1,
      duration: 300
    }).start()
  }

  render () {

    const opacityReverse = this.opacitytTransition.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    return (
      <Animated.View style={[Styles.mainContainer, { opacity: opacityReverse }]}>

        <Text style={Styles.title}>Discussões</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
          <CardCategory />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            share="155"
            like="344"
            contrib="70" />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            share="155"
            like="344"
            contrib="70" />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            share="155"
            like="344"
            contrib="70" />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            share="155"
            like="344"
            contrib="70" />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            share="155"
            like="344"
            contrib="70" />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            share="155"
            like="344"
            contrib="70" />
          <CardDiscussion
            photo={Logo}
            title="Titulo da tua pica"
            subtitle="Tema da tópico"
            share="155"
            like="344"
            contrib="70" />
        </ScrollView>

      </Animated.View>
    )
  }
}

const Styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 25,
    marginVertical: 27,
    marginLeft: 60,
    alignSelf: 'flex-start'
  },
  mainContainer: {
    width: Dimensions.get('screen').width,
    top: (Dimensions.get('screen').height / 4) * .1,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 22,
  }
})
