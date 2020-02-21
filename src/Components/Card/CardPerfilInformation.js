import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

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

                <View style={[Styles.infos, {
                    borderColor: '#dedede',
                    borderRightWidth: 1,
                    paddingRight: 10,
                }]}>
                    <Text style={Styles.valueCard}>{this.props.posts}</Text>
                    <Text style={Styles.titleCard}>Discussões</Text>
                </View>

                <View style={[Styles.infos, {
                    borderColor: '#dedede',
                    borderRightWidth: 1,
                    paddingRight: 15,
                }]}>
                    <Text style={Styles.valueCard}>{this.props.folowers}</Text>
                    <Text style={Styles.titleCard}>Seguidores</Text>
                </View>

                <View style={[Styles.infos, {
                    paddingRight: 5
                }]}>
                    <Text style={Styles.valueCard}>{this.props.contribs}</Text>
                    <Text style={Styles.titleCard}>Contribuições</Text>
                </View>

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
        elevation: 4,
        borderRadius: 10,
        position: "absolute",
        top: (Dimensions.get('screen').height / 3.5) - 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 5
    },

    infos: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    valueCard: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    titleCard: {
        color: '#9c9c9c'
    }
})