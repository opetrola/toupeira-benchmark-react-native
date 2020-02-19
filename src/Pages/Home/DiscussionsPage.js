import React, { useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet, Dimensions, ScrollView, Platform, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import CardDiscussion from '../../Components/Card/CardDiscussion'
import CardPerfilInformation from '../../Components/Card/CardPerfilInformation'

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

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: .8, y: 1 }}
                    colors={['#34b6ff', '#df5aff']}
                    locations={[0, 1]}
                    style={styles.container}>

                </LinearGradient>

                <TouchableOpacity>
                    <Icon
                        name="long-arrow-left"
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

            <CardPerfilInformation
                posts='357'
                folowers="5500"
                contribs="999+" />

            <Text style={styles.title}>Discussões</Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.containerScroll}
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: 'center',
                    paddingBottom: 150
                }}>


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
        height: Dimensions.get('screen').height / 3.5,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 50,
        backgroundColor: '#795CF0'
    },

    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 3.5,
        position: 'absolute',
        opacity: .7
    },

    title: {
        fontSize: 25,
        top: Dimensions.get('screen').height / 3.5 + 80,
        fontWeight: '900',
        marginHorizontal: 20,
        color: '#9c9c9c'
    },

    containerScroll: {
        height: (Dimensions.get('screen').height / 3) * 2,
        top: (Dimensions.get('screen').height / 3.5) + 95
    }


})

export default connect(state => ({ loginState: state }))(DiscussionsPage)
