import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Orders from "./containers/Orders";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customers" element={<Orders />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes