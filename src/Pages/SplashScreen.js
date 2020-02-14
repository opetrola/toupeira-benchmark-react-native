import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import LogoExtended from '../Components/SplashScreen/LogoExtended'


export default SplashScreen = props => {

    setTimeout(() => {
        props.navigation.navigate('LoginPage')
    }, 2000)

    return (
        <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={['#795CF0', '#5db5f0']}
            locations={[.4, 1]}
            style={styles.container}>

            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content" />

            <LogoExtended />

        </LinearGradient>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})
