import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
/*  import Primeiro from './components/Primeiro';
import Comp, { Comp1, Comp2 } from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Button from './components/Button';
import Contador from './components/Contador';
import Pai from './components/indireta/Pai'; */
import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';

export default () => (
    <SafeAreaView style={style.App}>
        {/*    <Titulo principal='Titulo' segundario='Subtitulo' />
        <Button />
        <Contador inicial={100}  passo={10} />
        <Contador />
       <Pai />
             <MinMax min={3} max={20} />
        <MinMax min={1} max={99} />
        <Aleatorio min={0} max={0} />
        <Comp/>
        <Comp1/>
        <Comp2/>
        <Text>{ 1 + 1 }</Text>
        <Pai />
        <Primeiro/>
        <ContadorV2 /> */}

        <Diferenciar />

    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    }
})
