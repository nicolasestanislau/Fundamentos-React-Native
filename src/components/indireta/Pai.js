import React, { useState }  from 'react';
import { Text } from 'react-native';
import style from '../style';
import Filho from './Filho';

export default props => {
    const [num, setNum] = useState('');
    const [texto, setTexto] = useState('');

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
        <Text style={style.textGrande}>{texto} {num}</Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor} />
        </>
    )
}