import * as React from "react";
import { Container, Top, Logo, Title } from "./styles";
import logo from "../../../assets/Nubank_Logo.png";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Headler() {
    return (
        <Container> 
            <Top> 
            <Logo source={logo} />
            <Title>Jhonata</Title>
            </Top>

            <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
        </ Container>
    );
}