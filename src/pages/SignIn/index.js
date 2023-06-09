import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button"
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();

    const handleLogin = () => {

        navigate("/home");

    }

    return (
        <C.Container>
            <C.Label>Kognit</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu E-mail"

                />
                <Input
                    type="password"
                    placeholder="Digite sua Senha"
                />
                <Button Text="Entrar" onClick={handleLogin} />
            </C.Content>
        </C.Container>
    );
};

export default Signin;