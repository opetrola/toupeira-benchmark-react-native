import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default class EmailLogin extends React.Component {

  state = {
    txtUser: '',
    txtPassword: ''
  }

  changeTextUser = txtUser => {
    this.setState({ txtUser })
  }

  changeTextPassword = txtPassword => {
    this.setState({ txtPassword })
  }

  render () {

    return (
      <View style={[Styles.formContainer]}>
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

        <TouchableOpacity
          onPress={this.props.doLogin}>
          <Text style={Styles.btnEnter}>ENTRAR</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  title: {
    fontSize: 27,
    color: '#ffffff',
    margin: 30,
    fontWeight: '100',
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
    borderRadius: 20,
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
    borderRadius: 20,
    height: 35,
    fontWeight: '100',
    fontSize: 15,
    paddingTop: 6
  }
})
