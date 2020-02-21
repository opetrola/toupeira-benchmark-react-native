import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, ToastAndroid } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

import firebase from '../../Services/Firebase'
import { connect } from 'react-redux'

const setIsAnonymous = (loginState, isAnonymous) => ({
    type: 'SET_IS_ANONYMOUS',
    loginState,
    isAnonymous
})


const AnonymousLoginButton = ({ loginState, dispatch }) => {

    const doAnonymousLogin = () => {
        firebase.auth()
            .signInAnonymously()
            .then(() => {
                props.navigation.navigate('Home')
                ToastAndroid.show('Você está logado como usuário anônimo')
                dispatch(setIsAnonymous(loginState, true))
            })
            .catch(() => { })
    }

    return (
        <TouchableOpacity onPress={() => doAnonymousLogin()}>

            <LinearGradient
                start={{ x: 0.0, y: 1.25 }}
                end={{ x: 1, y: .25 }}
                locations={[0, 1]}
                colors={['#ffc400', '#ff19ee']}
                style={styles.containerButton}>

                <Text style={styles.textButton}>

                    <Icon
                        name="user-secret"
                        size={18}
                        color="#fff" /> &nbsp;Login Anônimo

                </Text>

            </LinearGradient>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    containerButton: {
        width: ((Dimensions.get('screen').width / 6) * 5) + 20,
        padding: 20,
        borderRadius: 30,
        marginBottom: 10
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default connect(state => ({ loginState: state }))(AnonymousLoginButton)
