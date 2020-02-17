import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default LogoExtended = () => {

    return (

        <View style={styles.containerLogo}>

            <View style={styles.containerTextLogo}>

                <Text style={styles.textLogo}>TOU
                    <Text style={{ color: 'rgba(0, 0, 0, .5)' }}>PEIRA</Text>
                </Text>

            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    imageLogo: {
        width: 100,
        height: 100,
        borderColor: "#fff",
        borderWidth: 22,
        marginHorizontal: 7,
        borderRadius: 11
    },

    textLogo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: -6
    },

    containerLogo: {
        alignItems: 'center'
    }

})
