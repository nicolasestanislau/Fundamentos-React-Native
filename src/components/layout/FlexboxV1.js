import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado color='#ff801a' />
            <Quadrado color='#50d1f6' />
            <Quadrado color='#dd22c1' />
            <Quadrado color='#8312ed' />
            <Quadrado color='#36c9a7' />

        </View>
    )
}

const style = StyleSheet.create({
    FlexV1 : {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-around',
    }
})