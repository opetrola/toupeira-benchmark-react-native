import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

export default DefaultButton = props => {
    return (
        <TouchableOpacity>

            <LinearGradient
                start={{ x: 0.0, y: 1.25 }}
                end={{ x: 1, y: .25 }}
                colors={['#795CF0', '#5db5f0']}
                style={styles.defaultButton}>

                <Text style={styles.textButton}>&nbsp;{props.text}</Text>

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
