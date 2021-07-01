import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import style from './style';


export default ({inicial = 0, passo = 1}) => {
    const [numero, setNumero] = useState(inicial)

    const incremento = () => {
        setNumero(numero + passo)
    }
    const decremento = () => setNumero(numero - passo)
    return (
        <>
            <Text style={style.textGrande} >{numero}</Text>
            <View style={style.botoes}>
                <Button title="+" onPress={incremento} />
                <Button title="-" onPress={decremento} />

            </View>

        </>
    )
}