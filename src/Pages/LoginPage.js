import React from 'react'
import { View, StatusBar } from 'react-native'

import LoginDetailContainer from '../Components/Containers/LoginDetailContainer'
import LoginActionsContainer from '../Components/Containers/LoginActionsContainer'

const LoginPage = props => (
    <View>

        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content" />

        <LoginDetailContainer />

        <LoginActionsContainer navigation={props.navigation} />

    </View>
)

export default LoginPage
