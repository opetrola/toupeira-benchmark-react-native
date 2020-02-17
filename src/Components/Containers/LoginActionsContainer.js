import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'

import GoogleLoginButton from '../Buttons/GoogleLoginButton'
import EmailLoginButton from '../Buttons/EmailLoginButton'

const LoginActionsContainer = props => (
    <View style={styles.container}>

        <GoogleLoginButton />
        <EmailLoginButton navigation={props.navigation} />

        <TouchableOpacity>

            <Text style={styles.TermsLink}>
                Termos de uso e privacidade
                </Text>

        </TouchableOpacity>

    </View>
)

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('screen').height / 3) * 1
    },

    TermsLink: {
        color: '#795CF0',
        marginVertical: 40,
        alignSelf: 'center'
    }

})

export default LoginActionsContainer
