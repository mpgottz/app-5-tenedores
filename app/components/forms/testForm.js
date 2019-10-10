import React from "react";

import t from "tcomb-form-native";
const Form = t.form.Form;
import Input from "./templates/Input";

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      template: Input,
      config: {
        placeholder: "Ingrese su usuario",
        password: false,
        secureTextEntry: false,
        iconType: "font-awesome",
        inconName: "user"
      }
    },
    password: {
      template: Input,
      config: {
        placeholder: "Ingrese su contraseña",
        password: true,
        secureTextEntry: true,
        iconType: "font-awesome",
        inconName: "lock"
      }
    }
  }
};
