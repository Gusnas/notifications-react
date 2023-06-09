import React from "react";
import * as C from "./styles"

const Input = ({type, placeholder, value}) => {
    return (
        <C.Input
          value={value}
          type={type}
          placeholder={placeholder}
        />
      );
    };

export default Input;