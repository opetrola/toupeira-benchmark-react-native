import React from 'react'
import { View, StyleSheet, StatusBar, TouchableOpacity, Text, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import EnterEmailButton from '../Components/Buttons/EnterEmailButton'
import EmailLoginForm from '../Components/Forms/EmailLoginForm'

import firebase from '../Services/Firebase'

const EmailLoginPage = props => {

    const goBack = () => {
        props.navigation.navigate('LoginPage')
    }

    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    return (
        <View style={styles.container} >

            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content" />

            <View style={styles.header}>

                <TouchableOpacity onPress={goBack}>

                    <Icon
                        name="angle-left"
                        size={35}
                        color="#795CF0" />

                </TouchableOpacity>

                <Text style={styles.title}>entrar</Text>

            </View>

            <EmailLoginForm />

            <EnterEmailButton
                text={'entrar'}
                handleSignUp={handleSignUp} />

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    header: {
        width: Dimensions.get('screen').width,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 35,
        flexDirection: 'row'
    },

    title: {
        fontSize: 20,
        right: (Dimensions.get('screen').width / 2) - 60
    }

})

export default EmailLoginPage