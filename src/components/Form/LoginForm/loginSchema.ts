import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Campo obrigatório!")
        .email("É necessário um e-mail válido"),

    password: yup
        .string()
        .required("Campo obrigatório!")
})