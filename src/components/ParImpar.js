import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

export default ({ num = 0 }) => {
        return (
            <View>
                <Text style={style.textGrande}>O resultado é:</Text>
                {
                    num % 2 === 0 ?
                    <Text style={style.textGrande}>Par</Text> :
                    <Text style={style.textGrande}>Impar</Text>
                }
            </View>
        )
}