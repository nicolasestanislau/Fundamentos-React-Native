import React from 'react';
import { View, Text } from 'react-native';

import style from '../style';

export default props => {
    return (
        <View style={style.display}>
            <Text style={[style.textGrande, style.displayText]}>
                {props.num}
            </Text>

        </View>

    )
}