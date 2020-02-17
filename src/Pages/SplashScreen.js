import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import LogoExtended from '../Components/Logos/LogoExtended'
import firebase from '../Services/Firebase'


const SplashScreen = props => {

    setTimeout(() => {
        firebase.auth().onAuthStateChanged(user => {
            // props.navigation.navigate('LoginPage')
            props.navigation.navigate(user ? 'Home' : 'LoginPage')
        })
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

export default SplashScreen
