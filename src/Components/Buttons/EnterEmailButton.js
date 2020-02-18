import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, Platform, ToastAndroid, Alert } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import firebase from '../../Services/Firebase'
import { connect } from 'react-redux'

const DefaultButton = ({ loginState }) => {

    const alertError = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else if (Platform.OS === 'ios') {
            Alert.Alert(
                'O login falhou',
                msg,
                [
                    {
                        text: 'fechar',
                        style: 'cancel'
                    }
                ]
            )
        }

    }

    const signUp = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    alertNotAccountYet(email, password)
                } else {
                    alertError(error.message)
                }
            })
    }

    const createAccount = (email, password) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => { console.log(error.message) })
    }

    const alertNotAccountYet = (email, password) => {
        Alert.alert(
            'Conta não existente',
            'Deseja criar uma nova conta',
            [
                {
                    text: 'fechar',
                    style: 'cancel'
                },
                {
                    text: 'Criar',
                    onPress: () => {
                        createAccount(email, password)
                    }
                }
            ]
        )

    }

    const handleSignUp = (email, password) => {
        signUp(email, password)
    }

    return (
        <TouchableOpacity
            disabled={loginState.password.length <= 0}
            onPress={() => handleSignUp(loginState.email, loginState.password)}
            style={{
                opacity: loginState.password.length <= 0 ? .3 : 1
            }} >

            <LinearGradient
                start={{ x: 0.0, y: 1.25 }}
                end={{ x: 1, y: .25 }}
                colors={['#795CF0', '#5db5f0']}
                style={styles.defaultButton}>

                <Text style={styles.textButton}>&nbsp;{'entrar'}</Text>

            </LinearGradient>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    defaultButton: {
        width: ((Dimensions.get('screen').width / 6) * 5) + 20,
        padding: 15,
        borderRadius: 30,
        alignSelf: 'center',
        marginBottom: 36
    },

    textButton: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20
    }
})

export default connect(state => ({ loginState: state }))(DefaultButton)
