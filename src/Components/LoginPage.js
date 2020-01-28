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

  state = {
    txtUser: '',
    txtPassword: '',
  }

  doLogin = () => {

  }

  changeTextUser = txtUser => {
    this.setState({ txtUser })
  }

  changeTextPassword = txtPassword => {
    this.setState({ txtPassword })
  }

  render () {
    return (
      <View style={Styles.bgContainer}>

        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content" />

        <ImageBackground
          source={bg}
          style={Styles.bg} />

        <View style={Styles.topBtnGroup}>
          <TouchableOpacity>
            <Icon name="share-alt" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" size={25} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={Styles.formContainer}>
          <Text style={Styles.title}>LOGIN</Text>

          <TextInput
            style={Styles.txtInput}
            placeholder="@username"
            value={this.state.txtUser}
            onChangeText={this.changeTextUser} />

          <TextInput
            style={Styles.txtInput}
            placeholder="password"
            value={this.state.txtPassword}
            onChangeText={this.changeTextPassword}
            secureTextEntry={true} />

          <TouchableOpacity onPress={this.doLogin}>
            <Text style={Styles.btnEnter}>ENTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.socialLoginContainer}>
          <TouchableOpacity onPress={this.doLogin}>
            <Text style={[Styles.socialBtn, { backgroundColor: '#D34836' }]}>
              <Icon name="google" size={18} color="#fff" /> &nbsp; Login com Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.doLogin}>
            <Text style={Styles.socialBtn}>
              <Icon name="facebook" size={18} color="#fff" /> &nbsp;Login com Facebook
              </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.doLogin}>
            <Text style={Styles.btnSignUp}>Ainda não tem uma conta? <Text style={{ color: '#d66400' }}>Registre-se</Text></Text>
          </TouchableOpacity>
        </View>


        <View style={Styles.loginContainer}>
          <Image
            source={Logo}
            style={Styles.logo} />

          <View style={Styles.aboutContactContainer}>
            <TouchableOpacity>
              <Text style={{ color: '#7d7d7d' }}>SOBRE&nbsp; </Text>
            </TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity>
              <Text style={{ color: '#7d7d7d' }}> &nbsp;CONTATO</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#d66400',
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    height: (Dimensions.get('screen').height / 2),
    marginTop: (Dimensions.get('screen').height / 2),
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: -40
  },
  aboutContactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: (Dimensions.get('window').height / 3) + 40,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    paddingTop: 20,
    width: (Dimensions.get('window').width / 5) * 4
  },
  title: {
    fontSize: 27,
    color: '#ffffff',
    margin: 30,
    fontWeight: '100',
  },
  bg: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('screen').height / 2),
    position: 'absolute',
    opacity: .2
  },
  formContainer: {
    position: 'absolute',
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  txtInput: {
    backgroundColor: '#ffffff',
    width: (Dimensions.get('screen').width / 7) * 4.5,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 25,
    marginTop: -10,
    height: 40
  },
  btnEnter: {
    margin: 5,
    color: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 10,
    width: 120,
    textAlign: 'center',
    borderRadius: 10,
    height: 35,
    fontWeight: '100',
    fontSize: 15,
    paddingTop: 6
  },
  socialLoginContainer: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
    top: (Dimensions.get('screen').height / 4) * 2,
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
  },
  topBtnGroup: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 50,
    paddingHorizontal: 20
  }
})
