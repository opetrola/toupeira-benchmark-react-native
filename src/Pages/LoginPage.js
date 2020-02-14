import React from 'react'
import { View, StatusBar } from 'react-native'

import LoginDetail from '../Components/LoginPage/LoginDetail'
import LoginActions from '../Components/LoginPage/LoginActions'

export default LoginPage = () => {
    return (
        <View>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content" />

            <LoginDetail />
            <LoginActions />

        </View>
    )
}
