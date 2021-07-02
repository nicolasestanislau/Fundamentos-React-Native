import React from 'react';
import { View, Text, FlatList } from 'react-native';

import style from '../style';

import produtos from './produtos'

export default props => {
    const renderProduto = ({ item }) => {
        return <Text>{item.nome}</Text>
    }
    return (
        <>
            <Text style={style.textGrande}>
                Lista de ProdutosV2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderProduto} />
        </>
    )
}