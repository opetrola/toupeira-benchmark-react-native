import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Text
} from 'react-native'

import Logo from '../../Assets/image-samples/pp.jpg';
import CardDiscussion from '../../Components/Cards/CardDiscussion';
import CardNew from '../../Components/Cards/CardNew';


export default class MyDiscussions extends React.Component {

  constructor() {
    super()
  }

  render () {

    return (
      <Animated.View style={[Styles.mainContainer]}>

        <Text style={Styles.title}>Meus Tópicos</Text>

        <CardNew />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
          <CardDiscussion
            photo={Logo}
            title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
            subtitle="Tema da tópico"
            attached="5 anexos"
            contrib="Sem respostas"
            category="SP"
            date="04/02/2020"
            eyeCheck="1" />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            attached="25 links"
            contrib="555 respostas"
            category="VC"
            date="06/01/2020"
            eyeCheck="1" />
          <CardDiscussion
            photo={Logo}
            title="Titulo do tópico"
            subtitle="Tema da tópico"
            attached="12 links"
            contrib="70 respostas"
            category="SP"
            date="10/12/2020"
            eyeCheck="1" />
        </ScrollView>

      </Animated.View>
    )
  }
}

const Styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 30,
    marginBottom: 34,
    marginLeft: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 20
  },
  mainContainer: {
    top: (Dimensions.get('screen').height / 4) * .1,
    flex: 1,
    marginBottom: 22,
  }
})
