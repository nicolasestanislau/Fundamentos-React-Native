import React from 'react';
import { Text } from 'react-native';
import style from './style';

export default props => {
    return(
        <Text style={style.textGrande}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}