import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

export default LoginActions = () => {
    return (
        <TouchableOpacity>

            <LinearGradient
                start={{ x: 0.0, y: 1.25 }}
                end={{ x: 1, y: .25 }}
                locations={[0, .5, .9]}
                colors={['#F4B400', '#DB4437', '#f63c9f']}
                style={styles.googleButton}>

                <Text style={styles.textButton}>
                    <Icon name="google" size={18} color="#fff" /> &nbsp;Login com Google
                </Text>

            </LinearGradient>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    googleButton: {
        width: (Dimensions.get('screen').width / 6) * 4,
        padding: 15,
        borderRadius: 30,
        marginBottom: 10
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
