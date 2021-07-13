import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
/*  import Primeiro from './components/Primeiro';
import Comp, { Comp1, Comp2 } from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Button from './components/Button';
import Contador from './components/Contador';
import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';  
import ParImpar from './components/ParImpar';
import Pai from './components/relacao/Pai';
import Filho from './components/relacao/Filho';
import UsuarioLogado from './components/UsuarioLogado';
import ListaProdutos from './components/produtos/ListaProdutos'; */
import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
import DigiteSeuNome from './components/DigiteSeuNome';
import Quadrado from './components/layout/Quadrado';


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
        <ContadorV2 />
        <Diferenciar />
        <ParImpar num={4}/>
        <Pai>
            <Filho nome="filho 1" sobrenome="sobre nome filho 1" />
            <Filho nome="filho 2 " sobrenome="sobrenome filho 2" />
            <Filho nome="filho n " sobrenome="sobrenome filho n" />
        </Pai>
        <Pai >
            <Filho nome="filho de outro componente pai 1" sobrenome="sobre nome filho 1" />
            <Filho nome="filho de outro componente pai 2 " sobrenome="sobrenome filho 2" />
            <Filho nome="filho de outro componente pai n " sobrenome="sobrenome filho n" />
        </Pai>
        <UsuarioLogado usuario={{nome: 'Nicolas', email: 'nicolas_estanislau@hotmail.com'}}/>
        <UsuarioLogado usuario={{nome: 'Nicolas'}}/>
        <UsuarioLogado usuario={{email: 'nicolas_estanislau@hotmail.com'}}/>
        <UsuarioLogado usuario={{nome: 'Nicolas apareceu', email: 'nicolas_estanislau@hotmail.com'}}/>
        <UsuarioLogado usuario={{nome: null, email: 'nicolas_estanislau@hotmail.com'}}/>
        <ListaProdutos />
        <ListaProdutosV2 />
        <DigiteSeuNome /> */}
        <Quadrado color='#ff801a'/>
        <Quadrado color='#50d1f6' />
        <Quadrado color='#dd22c1' />
        <Quadrado color='#8312ed' />
        <Quadrado color='#36c9a7' />

    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
})
