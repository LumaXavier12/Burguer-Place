import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import Trash from "../../assets/trash.svg";
import { H1 } from '../../components/Title/styles'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'
import { Container, Order } from "./styles";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await axios.get("http://localhost:3001/customers");

            setOrders(newOrders);
        }

        fetchOrders()
    }, [])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3001/customers/${orderId}`)

        const newOrders = orders.filter((order) => order.id !== orderId);

        setOrders(newOrders);
    }

    function goBackPage() {
        navigate("/")
    }

    return (
        <Container>
            <ContainerItens>
                <H1>Pedidos</H1>

                <ul>
                    {orders.map((order) => (
                        <Order key={order.id}>
                            <p>{order.order}</p>
                            <p>{order.clientName}</p>

                            <button onClick={() => deleteOrder(order.id)}>
                                <img src={Trash} alt="lata-de-lixo" />
                            </button>
                            
                        </Order>
                    ))
                    }
                </ul>

                <Button isBack={true} onClick={goBackPage}>Voltar</Button>

            </ContainerItens>
        </Container>
    )
}

export default Orders
