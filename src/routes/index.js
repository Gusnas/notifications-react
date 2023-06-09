import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Signin from "../pages/SignIn"

const Private = ({ Item }) => {
    const {signed} = true;

    return signed > 0 ? <Item/> : <Signin/>; 
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Signin />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;