import React from 'react';
import { Text } from 'react-native';
import style from './style';

/* export default props => {
    const {min, max} = props
    let numberAleatorio = parseInt(Math.random() * (max - min) + min);
    return(
        <Text style={style.textMedio}>
            O valor aleatório entre {max} e {min} é: {numberAleatorio}
        </Text>
    )
} */

export default ({min, max}) => {
    let maxModi = max
    let minModi = min
    maxModi += 2000
    minModi += 1000
    let numberAleatorio = parseInt(Math.random() * (maxModi - minModi + 1) + minModi);
    console.log(minModi, maxModi)
    return(
        <Text style={style.textMedio}>
            O valor aleatório entre {maxModi} e {minModi} é: {numberAleatorio}
        </Text>
    )
}