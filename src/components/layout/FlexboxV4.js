import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}>
                <Text style={style.text}>V0</Text>
            </View>
            <View style={style.V1}>
                <Text style={style.text}>V1</Text>
            </View>
            <View style={style.V2}>
                <Text style={style.text}>V2</Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        backgroundColor: '#000',

        width: 100,
        flex: 1,
    },
    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    V0: {
        backgroundColor: '#50d1f6',
        height: 300,
    },
    V1: {
        backgroundColor: '#ff801a',
        flex: 3,
    },
    V2: {
        backgroundColor: '#dd22c1',
        flex: 1,
    }
})