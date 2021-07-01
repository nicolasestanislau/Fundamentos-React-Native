import React from 'react';
import { Text, Platform } from 'react-native';
import style from './style';

export default props => {
    if (Platform.OS === 'android') {
        return (
            < Text style={style.textGrande} >
                Android
            </Text >
        )
    } else if (Platform.OS === 'ios') {
        return (
            < Text style={style.textGrande} >
                iOS
            </Text >
        )

    } else {
        return (
            < Text style={style.textGrande} >
                outro!
            </Text >
        )

    }
}