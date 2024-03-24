import React from "react";
import { Button } from "./styles"

function ButtonPage({ children, ...props }) {

    return <Button {...props}>{children}</Button>
}

export default ButtonPage