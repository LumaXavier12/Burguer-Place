import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import Button from '../../components/Button'
import { H1 } from '../../components/Title/styles'
import ContainerItens from '../../components/ContainerItens'
import { Container, InputLabel, Input } from "./styles";

const App = () => {
   const [orders, setOrders] = useState([]);
   const navigate = useNavigate();
   const inputOrder = useRef();
   const inputClientName = useRef();

   async function addNewOrder() {
      const orderValue = inputOrder.current.value.trim();
      const clientNameValue = inputClientName.current.value.trim();

      if (orderValue === "" || clientNameValue === "") {
         alert("Por favor, preencha todos os campos.");
         return;
      }

      const { data: newOrder } = await axios.post("http://localhost:3001/customers", {
         order: orderValue,
         clientName: clientNameValue,
      });

      setOrders([...orders, newOrder]);

      navigate('/customers')
   }

   return (
      <Container>
         <ContainerItens>
            <H1>Faça seu pedido!</H1>

            <InputLabel>Pedido:</InputLabel>
            <Input ref={inputOrder} placeholder="Pedido..." />

            <InputLabel>Nome:</InputLabel>
            <Input ref={inputClientName} placeholder="Nome..." />

            <Button onClick={addNewOrder}>Finalizar pedido</Button>

         </ContainerItens>
      </Container>
   )
}

export default App