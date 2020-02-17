import React from 'react'
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Text,
    Dimensions,
    TextInput
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import DefaultButton from '../Components/Buttons/DefaultButton';

export default class EmailLoginPage extends React.Component {

    state = {
        email: ''
    }

    onChangeEmail = email => {
        this.setState({ email })
    }

    goBack = () => {
        this.props.navigation.navigate('LoginPage')
    }

    render() {
        return (
            <View style={styles.container} >

                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle="dark-content" />

                <View style={styles.header}>

                    <TouchableOpacity onPress={this.goBack}>

                        <Icon
                            name="angle-left"
                            size={35}
                            color="#795CF0" />

                    </TouchableOpacity>

                    <Text style={styles.title}>entrar</Text>

                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.EmailTitleInput}>digite seu email</Text>
                    <TextInput
                        style={styles.txtEmail}
                        placeholder="Email ou Login"
                        onChangeText={text => this.onChangeEmail(text)}
                        value={this.state.email} />
                </View>

                <DefaultButton text={'entrar'} />

            </View>
        )
    }

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
    },

    txtEmail: {
        height: 50,
        marginHorizontal: 30,
        marginTop: 15,
        fontSize: 27
    },

    EmailTitleInput: {
        fontSize: 16,
        color: 'rgba(10, 10, 10, 1)',
        marginHorizontal: 30,
    },

    formContainer: {
        position: 'absolute',
        top: Dimensions.get('screen').height / 7
    }

})
