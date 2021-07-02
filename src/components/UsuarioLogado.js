import React from 'react';
import { View, Text } from 'react-native';
import If from './if';

import style from './style';

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If test={usuario && usuario.nome && usuario.email}>
                <Text style={style.textGrande}>Usuario Logado: </Text>
                <Text style={style.textPequeno}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    )
}