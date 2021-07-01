import React, { Fragment } from 'react';
import { Text } from 'react-native';
import style from './style';

/* export default props => {
    return(
        <Fragment>   
                <Text style={style.textGrande}>{props.principal}</Text>
                <Text style={style.textPequeno}>{props.segundario}</Text>
        </Fragment>
    )
} */

export default props => {
    return(
        <Fragment key='1'>   
                <Text style={style.textGrande}>{props.principal}</Text>
                <Text style={style.textPequeno}>{props.segundario}</Text>
        </Fragment>
    )
}
