import React,{ useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import style from './style';

export default props => {
    let [nome, setNome] = useState('');
    return(
        <View>
            <Text>{nome}</Text>
            <TextInput style={{
                borderBottomWidth: 1,
            }}
            placeholder="digite aqui"
            value={nome}
            onChangeText={(nome => setNome(nome))} />
            
        </View>
    )
}