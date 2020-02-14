import React from 'react'
import { StyleSheet, Dimensions, ImageBackground } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import LogoSimplified from '../../Components/LoginPage/LogoSimplified'
import bgImageLogin from '../../Assets/Images/BgImagelogin.jpg'

export default LoginDetail = () => {
    return (
        <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={['#795CF0', '#5db5f0']}
            locations={[.4, 1]}
            style={styles.container}>

            <ImageBackground
                source={bgImageLogin}
                style={[styles.container, styles.bgImage]}
                imageStyle={{ borderBottomLeftRadius: 7, borderBottomRightRadius: 7 }} />

            <LogoSimplified />

        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get('screen').width,
        height: (Dimensions.get('screen').height / 3) * 2,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7
    },

    bgImage: {
        position: 'absolute',
        opacity: .1,
        backgroundColor: "#d743d4"
    }

})