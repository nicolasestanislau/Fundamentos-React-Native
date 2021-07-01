import React from 'react';
import { Button, View } from 'react-native';
import style from '../style';

export default props => {
    return (
        <View style={style.botoes}>
            <Button title="-" onPress={props.decremento} />
            <Button title="+" onPress={props.incremento} />
        </View>
    )
}