import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado color='#ff801a' />
            <Quadrado color='#50d1f6' />
            <Quadrado color='#dd22c1' />
            <Quadrado color='#8312ed' />
            <Quadrado color='#36c9a7' />

        </View>
    )
}

const style = StyleSheet.create({
    FlexV2 : {
        backgroundColor: '#000',

        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
    }
})