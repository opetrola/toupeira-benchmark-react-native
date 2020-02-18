import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import If from '../Conditionals/If'

const changeTxtPasswordLogin = (loginState, password) => ({

    type: 'CHANGE_TXT_PASSWORD_LOGIN',
    loginState,
    password

})

const changeTxtEmailLogin = (loginState, email) => ({

    type: 'CHANGE_TXT_EMAIL_LOGIN',
    loginState,
    email

})


const emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const PasswordLoginForm = ({ loginState, dispatch }) =>
    <View style={styles.formContainer}>

        <If test={emailRule.test(loginState.email)}>

            <Text style={styles.PasswordTitleInput}>digite sua senha</Text>

            <TextInput
                style={styles.txtPassword}
                placeholder="Senha"
                value={loginState.password}
                onChangeText={(text) => dispatch(changeTxtPasswordLogin(loginState, text))}
                secureTextEntry={true} />

            <TouchableOpacity onPress={() => dispatch(changeTxtEmailLogin(loginState, ""))}>
                <Text style={styles.buttonReturnEmail}>x &nbsp;{loginState.email}</Text>
            </TouchableOpacity>

        </If>

    </View>

const styles = StyleSheet.create({

    txtPassword: {
        height: 50,
        marginHorizontal: 30,
        marginTop: 15,
        fontSize: 27
    },

    PasswordTitleInput: {
        fontSize: 16,
        color: 'rgba(10, 10, 10, 1)',
        marginHorizontal: 30,
    },

    formContainer: {
        position: 'absolute',
        top: Dimensions.get('screen').height / 7
    },

    buttonReturnEmail: {
        marginLeft: 20,
        marginTop: 10,
        color: '#795CF0'
    }

})

export default connect(state => ({ loginState: state }))(PasswordLoginForm)
