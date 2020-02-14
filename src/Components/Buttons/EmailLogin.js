import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'

export default LoginActions = () => {
    return (
        <TouchableOpacity>

            <Text style={[styles.loginButton]}>
                Login com email
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    loginButton: {
        width: (Dimensions.get('screen').width / 6) * 4,
        padding: 15,
        borderRadius: 30,
        color: '#795CF0',
        borderWidth: 1,
        borderColor: '#795CF0',
        textAlign: 'center'
    }
})
