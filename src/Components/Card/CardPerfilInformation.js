import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class CardDiscission extends React.Component {

    state = {
        colorTopic: [
            ''
        ]
    }

    changColorTopic = topic => {
        switch (topic) {
            case 'VC':
                return '#f15b5b'
            case 'SP':
                return '#f8bc44'
            case 'CPU':
                return '#34c91d'
            case 'DEV':
                return '#4c86b8'
            case 'OT':
                return '#795CF0'
        }
    }

    changeCategorytitle = topic => {
        switch (topic) {
            case 'VC':
                return 'Placas de vídeo'
            case 'SP':
                return 'Smartphones'
            case 'CPU':
                return 'Processadores'
            case 'DEV':
                return 'Desenvolvimento'
            case 'OT':
                return 'Outra categoria'
        }
    }

    render () {
        return (
            <View style={Styles.cards}>

            </View>
        )
    }
}

const Styles = StyleSheet.create({
    cards: {
        width: (Dimensions.get('screen').width / 6) * 5,
        alignSelf: 'center',
        height: 120,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 9,
        elevation: 5,
        borderRadius: 10,
        position: "absolute",
        top: (Dimensions.get('screen').height / 3.5) - 70
    }
})