import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'

import GoogleLogin from '../Buttons/GoogleLogin'
import EmailLogin from '../Buttons/EmailLogin'

export default LoginActions = () => {

    return (
        <View style={styles.container}>

            <GoogleLogin />
            <EmailLogin />

            <TouchableOpacity>
                <Text style={styles.TermsLink}>Termos de uso e política de privacidade.</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('screen').height / 3) * 1
    },

    TermsLink: {
        color: '#795CF0',
        marginVertical: 30
    }

})
