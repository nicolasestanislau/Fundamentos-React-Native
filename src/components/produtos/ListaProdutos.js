import React from 'react';
import { View, Text } from 'react-native';

import style from '../style';

import produtos from './produtos'

export default props => {
    function obterLista() {
        return produtos.map(produto => {
            return (
                <Text key={produto.id}>
                    {produto.nome} - {produto.preco}
                </Text>
            )
        })
    }
    return (
        <>
            <Text style={style.textGrande}>
                Lista de Produtos
            </Text>
            {obterLista()}
        </>
    )
}