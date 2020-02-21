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

                <View style={Styles.topicContentTitle}>
                    <Text style={Styles.topicTitle}>{this.props.title.substring(0, 20)}{this.props.title.length >= 20 ? '..' : ''}</Text>
                    <Text style={[Styles.topicSubtitle, { backgroundColor: this.changColorTopic(this.props.category) }]}>{this.changeCategorytitle(this.props.category)}</Text>
                </View>

                <Image
                    style={[Styles.logoTopic, { borderColor: this.changColorTopic(this.props.category) }]}
                    source={this.props.photo} />

                <View style={Styles.shareContainer}>

                    <View style={Styles.shareItens}>
                        <Text style={{ fontSize: 10, color: '#b8b8b8' }}>Recursos</Text>
                        <Text style={Styles.shareSubtitle}>{this.props.attached}</Text>
                    </View>

                    <View style={Styles.shareItens}>
                        <Text style={{ fontSize: 10, color: '#b8b8b8' }}>Contribuíções</Text>
                        <Text style={Styles.shareSubtitle}>{this.props.contrib}</Text>
                    </View>

                    <View style={Styles.shareItens}>
                        <Text style={{ fontSize: 10, color: '#b8b8b8' }}>Data</Text>
                        <Text style={Styles.shareSubtitle}>{this.props.date}</Text>
                    </View>
                </View>

                <Text style={Styles.eyeCheck}>
                    <Icon name="eye" size={30} color={this.props.eyeCheck === '1' ? '#795CF0' : '#dedede'} />
                </Text>

            </View>
        )
    }
}

const Styles = StyleSheet.create({

    cards: {
        width: (Dimensions.get('screen').width / 4) * 2.5,
        height: 300,
        flexDirection: 'column',
        marginHorizontal: 25,
        backgroundColor: '#fff',
        elevation: 13,
        borderTopStartRadius: 80,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 25,
        transform: [{ rotate: '-5deg' }],
        padding: 30
    },

    topicTitle: {
        margin: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7d7d7d',
        marginLeft: -2,
        maxWidth: (Dimensions.get('screen').width / 6) * 5.7,
        minWidth: (Dimensions.get('screen').width / 6) * 5.7,
    },

    topicSubtitle: {
        fontSize: 13,
        marginTop: -19,
        fontWeight: '900',
        color: '#fff',
        width: 120,
        textAlign: 'center',
        padding: 2,
        borderRadius: 20
    },

    logoTopic: {
        width: ((Dimensions.get('screen').width / 4) * 3.5) / 2,
        height: ((Dimensions.get('screen').width / 4) * 3.5) / 2,
        margin: 13,
        alignSelf: 'flex-end',
        marginRight: (((Dimensions.get('screen').width / 4) * 3) / 4) * -0.7,
        marginTop: -120,
        zIndex: -1,
        opacity: .1,
        borderTopRightRadius: 1300,
        borderTopLeftRadius: 1300,
        borderBottomLeftRadius: 685,
        borderBottomRightRadius: 1300
    },

    topicContentTitle: {
        flexDirection: 'column',
        height: 80,
        marginTop: -5
    },

    shareContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginTop: -25
    },

    shareItens: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7d7d7d',
        marginHorizontal: 17,
        alignSelf: 'flex-start'
    },

    shareSubtitle: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#7d7d7d'
    },

    eyeCheck: {
        position: 'absolute',
        right: 20,
        top: 10
    }
})