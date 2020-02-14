import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

import ic_launcher from '../../Assets/Icon/mipmap-xxxhdpi/ic_launcher.png'

export default LogoExtended = () => {

    return (

        <View style={styles.containerLogo}>

            <Image style={styles.imageLogo} source={ic_launcher} />

            <View style={styles.containerTextLogo}>

                <Text style={styles.textLogo}>TOU</Text>
                <Text style={[styles.textLogo, { color: 'rgba(0, 0, 0, .5)' }]}>PEIRA</Text>

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
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerTextLogo: {
        flexDirection: 'column'
    }

})
