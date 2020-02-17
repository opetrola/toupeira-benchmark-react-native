import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'


const DefaultButton = ({ loginState }) => {

    const emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return (
        <TouchableOpacity
            disabled={!emailRule.test(loginState.email)}
            style={{
                opacity: !emailRule.test(loginState.email) ? .3 : 1
            }}>

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
