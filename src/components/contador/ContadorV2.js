import React, { useState } from 'react';
import { View, Text } from 'react-native';

import ContadorDisplay from './ContadorDisplay';
import ContadorButton from './ContadorButton';

import style from '../style';

export default props => {
    const [num, setNum] = useState(0);

    const incremento = () => {
        setNum(num + 1)
    }
    const decremento = () => {
        setNum(num - 1)
    }
    return (
        <>
            <Text style={style.textGrande}>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <ContadorButton
                incremento={incremento}
                decremento={decremento}
            />
        </>
    )
}