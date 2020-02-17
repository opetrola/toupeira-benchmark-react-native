import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'


const EmailLogin = props => {

    const toEmailLoginPage = () => {
        props.navigation.navigate('EmailLoginPage')
    }

    return (
        <TouchableOpacity>

            <Text
                onPress={() => toEmailLoginPage()}
                style={[styles.loginButton]}>
                Login com email
            </Text>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    loginButton: {
        width: ((Dimensions.get('screen').width / 6) * 5) + 20,
        padding: 20,
        borderRadius: 30,
        color: '#795CF0',
        borderWidth: 1,
        borderColor: '#795CF0',
        textAlign: 'center'
    }
})

export default EmailLogin
