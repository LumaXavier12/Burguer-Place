import React from "react";
import { ContainerItens } from "./styles";

function containerItens({ children, isBlur }) {
    return <ContainerItens isBlur={isBlur}>{children}</ContainerItens>
}

export default containerItens