import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'

import { connect } from 'react-redux'

const changeTxtEmailLogin = (loginState, email) => ({

    type: 'CHANGE_TXT_EMAIL_LOGIN',
    loginState,
    email

})

const EmailLoginForm = ({ loginState, dispatch }) =>
    <View style={styles.formContainer}>

        <Text style={styles.EmailTitleInput}>digite seu email</Text>

        <TextInput
            style={styles.txtEmail}
            placeholder="Email ou Login"
            value={loginState.email}
            onChangeText={(text) => dispatch(changeTxtEmailLogin(loginState, text))} />

    </View>

const styles = StyleSheet.create({

    txtEmail: {
        height: 50,
        marginHorizontal: 30,
        marginTop: 15,
        fontSize: 27
    },

    EmailTitleInput: {
        fontSize: 16,
        color: 'rgba(10, 10, 10, 1)',
        marginHorizontal: 30,
    },

    formContainer: {
        position: 'absolute',
        top: Dimensions.get('screen').height / 7
    }

})

export default connect(state => ({ loginState: state }))(EmailLoginForm)
