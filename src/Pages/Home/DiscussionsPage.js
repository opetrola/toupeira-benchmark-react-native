import React, { useEffect } from 'react'
import { Image, View, Text, StatusBar, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native'

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

    const alertLogout = () => {
        Alert.alert(
            'Já vai embora?',
            'Tem certeza que deseja sair?',
            [
                {
                    text: 'fechar',
                    style: 'cancel'
                },
                {
                    text: 'confirmar',
                    onPress: () => {
                        firebase.auth()
                            .signOut()
                            .then(() => {
                                this.props.navigation.navigate('LoginPage')
                            }).catch(() => { })
                    }
                }
            ]
        )

    }

    const doLogout = () => {
        alertLogout()
    }

    useEffect(() => {

        dispatch(
            userDataState(
                loginState,
                firebase.auth().currentUser.displayName || 'Usuário Anônimo',
                firebase.auth().currentUser.email,
                firebase.auth().currentUser.photoURL
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

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: .8, y: 1 }}
                    colors={['#34b6ff', '#df5aff']}
                    locations={[0, 1]}
                    style={styles.containerBackBg}>

                </LinearGradient>

                <View style={styles.headerIcons}>

                    <TouchableOpacity onPress={() => doLogout()}>
                        <Icon
                            name="sign-out"
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

                <View style={styles.userData}>
                    <Image source={{
                        uri: loginState.photo || 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.jdevoto.cl%2Fweb%2Fvendedor%2Fmario-santana%2Fdefault-user-img%2F&psig=AOvVaw193Gkr8VxSXwHflojQ0QlF&ust=1582227392259000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDEoc2u3ucCFQAAAAAdAAAAABBa'
                    }} />
                    <Text>{loginState.userName}</Text>
                </View>

            </View>

            {/* <CardPerfilInformation
                posts='357'
                folowers="5500"
                contribs="999+" /> */}

            <Text style={styles.title}>Discussões</Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal={true}
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
        width: Dimensions.get("screen").width + (Dimensions.get("screen").width / 6),
        height: Dimensions.get('screen').height / 3.4,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 50,
        backgroundColor: '#795CF0',
        borderBottomLeftRadius: 330,
        borderBottomRightRadius: 330,
    },

    container: {
        width: Dimensions.get("screen").width + (Dimensions.get("screen").width / 12),
        height: Dimensions.get('screen').height / 3.2,
        position: 'absolute',
        opacity: .7,
        borderBottomLeftRadius: 490,
        borderBottomRightRadius: 680
    },

    containerBackBg: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get('screen').height / 2.93,
        position: 'absolute',
        opacity: .7,
        borderTopLeftRadius: 420,
        borderBottomLeftRadius: 1400,
        borderBottomRightRadius: 1300,
        alignSelf: 'flex-end',
        zIndex: -1
    },

    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get("screen").width,
        paddingHorizontal: 25
    },

    userData: {
        height: 100,
        width: Dimensions.get("screen").width,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
        top: (Dimensions.get('screen').height / 3.5) + 75
    }


})

export default connect(state => ({ loginState: state }))(DiscussionsPage)
