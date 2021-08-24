import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import style from '../style';

export default ({ num }) => {
    return (
        <View style={styles.Container}>
            <Text style={[styles.Numero, style.textGrande]}>
                {num}
            </Text>

        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,

    },
    Numero: {
        color: '#fff',
    }
})