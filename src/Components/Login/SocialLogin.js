import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class SocialLogin extends React.Component {

  render () {

    return (
      <View style={Styles.socialLoginContainer}>

        <TouchableOpacity onPress={this.props.doLogin}>
          <Text style={[Styles.socialBtn, { backgroundColor: '#D34836' }]}>
            <Icon name="google" size={18} color="#fff" /> &nbsp; Login com Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.doLogin}>
          <Text style={Styles.socialBtn}>
            <Icon name="facebook" size={18} color="#fff" /> &nbsp;Login com Facebook
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Styles.btnSignUp}>
            Ainda não tem uma conta? &nbsp;
            <Text style={{ color: '#795CF0' }}>Registre-se</Text>
          </Text>
        </TouchableOpacity>

        <View style={Styles.aboutContactContainer}>
          <TouchableOpacity
            onPress={this.props.toAbout}>
            <Text style={{ color: '#7d7d7d' }}>SOBRE&nbsp; </Text>
          </TouchableOpacity>

          <Text>|</Text>

          <TouchableOpacity>
            <Text style={{ color: '#7d7d7d' }}> &nbsp;CONTATO</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  aboutContactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    paddingTop: 20,
    top: 0,
    width: (Dimensions.get('window').width / 5) * 4
  },
  socialLoginContainer: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    top: (Dimensions.get('screen').height / 4) * 2,
    height: Dimensions.get('screen').height / 2,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialBtn: {
    backgroundColor: '#8b9dc3',
    color: '#ffffff',
    padding: 12,
    width: (Dimensions.get('screen').width / 6) * 3.8,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    textAlign: 'center'
  },
  btnSignUp: {
    margin: 65,
    fontSize: 14,
    fontWeight: '100',
    color: '#7d7d7d'
  }
})
