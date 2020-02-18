import React, { useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet, Dimensions, ScrollView, Platform, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Iconicons from 'react-native-vector-icons/Ionicons'
import CardDiscussion from '../../Components/Card/CardDiscussion'

import photoTestUrl from '../../Assets/Images/Samples/sample_1.jpg'

import firebase from '../../Services/Firebase'
import { connect } from 'react-redux'

const userDataState = (loginState, userName, userEmail, photoURL) => ({
    type: "CURRENT_USER_CHANGES",
    loginState,
    userName,
    userEmail,
    photoURL
})

const DiscussionsPage = ({ loginState, dispatch }) => {

    useEffect(() => {

        dispatch(
            userDataState(
                loginState,
                firebase.auth().currentUser.displayName,
                firebase.auth().currentUser.email,
                firebase.auth().currentUser.photoURL || ''
            )
        )
    }, [])

    return (
        <View>

            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content" />

            <View style={styles.toolbar}>

                <Text style={styles.title}>Minhas Discussões</Text>

                <View style={styles.toolbarActions}>

                    <TouchableOpacity>
                        <Icon
                            name="search"
                            size={25}
                            color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon
                            name="plus-circle"
                            size={25}
                            color="#fff" />
                    </TouchableOpacity>

                </View>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.containerScroll}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 40 }}>

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei um smarthphone no ali express e veio uma pedra, o que eu faço?"
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="SP"
                    date="04/02/2020"
                    eyeCheck="1" />

                <CardDiscussion
                    photo={photoTestUrl}
                    title="Comprei uma piroca..."
                    subtitle="Tema da tópico"
                    attached="5 anexos"
                    contrib="Sem respostas"
                    category="VC"
                    date="04/02/2020"
                    eyeCheck="1" />

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    toolbar: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get('screen').height / 4,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 20,
        backgroundColor: '#795CF0'
    },

    title: {
        fontSize: 25,
        marginTop: 25,
        fontWeight: 'bold',
        color: '#fff'
    },

    containerScroll: {
        height: Dimensions.get('screen').height - 151,
        top: 102
    },

    toolbarActions: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (Dimensions.get('screen').width / 6)
    }

})

export default connect(state => ({ loginState: state }))(DiscussionsPage)
