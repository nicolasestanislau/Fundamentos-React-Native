import React from 'react';
import { View, Text } from 'react-native';
import Filho from './Filho';

import style from '../style';

export default props => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={style.textMedio}>[Inicio]Membros da familia:</Text>
            {props.children}
            <Text style={style.textMedio}>[Fim]Membros da familia:</Text>

        </View>
    )
}