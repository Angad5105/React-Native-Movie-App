import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Header = () => (

    <View style={styles.header}>
        <Text style={styles.titleText}>React Native Moview App</Text>
        <Text style={styles.baseText}>Now Playing</Text>
    </View>

)

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        height: '8%',
        backgroundColor: '#2f71b7',
        paddingTop: 20
    },
    titleText: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Baskerville'
    },
    baseText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '800',
        fontFamily: 'Baskerville'
    }
})