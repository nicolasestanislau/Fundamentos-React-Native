import React from 'react';
import { View, Text } from 'react-native';

import style from '../style';

export default props => {
    return (
        <>
            <Text style={style.textPequeno}>
                {props.nome} {props.sobrenome}
            </Text>
        </>
    )
}