import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

import ic_launcher from '../../Assets/Icon/mipmap-xxxhdpi/ic_launcher.png'

const LogoSimplified = () => (
    <View style={styles.containerLogo}>

        <Image
            style={styles.imageLogo}
            source={ic_launcher} />

        <View style={styles.containerTextLogo}>

            <Text style={styles.textLogo}>TOU</Text>
            <Text style={[
                styles.textLogo, {
                    color: 'rgba(0, 0, 0, .5)'
                }
            ]}>
                PEIRA
                </Text>

        </View>

    </View>
)

const styles = StyleSheet.create({

    imageLogo: {
        width: 60,
        height: 60,
        borderColor: "#fff",
        borderWidth: 15,
        marginHorizontal: 5,
        borderRadius: 30
    },

    textLogo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: -6
    },

    containerLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 70
    },

    containerTextLogo: {
        flexDirection: 'column'
    }

})

export default LogoSimplified
