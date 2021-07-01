import React from 'react';
import { Text } from 'react-native';
import style from './style';
import Style from './style'

function Comp() {
    return <Text style={style.textGrande}>Componente #Oficial</Text>
}

function Comp1() {
    return <Text style={style.textMedio}>Componente #01</Text>
}

function Comp2() {
    return <Text style={style.textPequeno}>Componente #02</Text>
}

export { Comp1, Comp2 };
export default Comp;
