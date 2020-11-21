import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 

import { StatusBar } from 'react-native';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import Menu from './src/components/Menu';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Annotation, Title, Description }  from './src/styles';

export default function App() {
  return (
    <>
      <Container >

        <Header />
        <Content>
          <Menu />
          
        <Card>
          <CardHeader>
            <MaterialIcons name="attach-money" size={28} color="#666" />
            <MaterialIcons name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 2.980.234,73</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 560,00 recebida de Vinicius Nunes hoje às 06:00h;
            </Annotation>
          </CardFooter>
        </Card>
        </Content>
        <Tabs />
        
      </Container>

      <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/>
    </>
  );
}