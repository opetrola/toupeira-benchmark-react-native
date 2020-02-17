import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'

import GoogleLogin from '../Buttons/GoogleLogin'
import EmailLogin from '../Buttons/EmailLogin'

export default LoginActions = props => {

    return (
        <View style={styles.container}>

            <GoogleLogin />
            <EmailLogin navigation={props.navigation} />

            <TouchableOpacity>

                <Text style={styles.TermsLink}>
                    Termos de uso e privacidade
                </Text>

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
        marginVertical: 40,
        alignSelf: 'center'
    }

})
