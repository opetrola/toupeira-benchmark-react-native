import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Iconicons from 'react-native-vector-icons/Ionicons'

const Benchmark = () => (
    <View>
        <View style={styles.toolbar}>

            <Text style={styles.title}>Benchmark</Text>

            <View style={styles.toolbarActions}>

                <TouchableOpacity>
                    <Icon
                        name="search"
                        size={25}
                        color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Iconicons
                        name="md-more"
                        size={25}
                        color="#fff" />
                </TouchableOpacity>

            </View>
        </View>
    </View>
)

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
        backgroundColor: '#f66'
    },

    title: {
        fontSize: 25,
        marginTop: 25,
        fontWeight: 'bold',
        color: '#fff'
    },

    toolbarActions: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (Dimensions.get('screen').width / 7)
    }
})

export default Benchmark
