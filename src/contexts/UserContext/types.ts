import React from "react";
import { NavigateFunction } from "react-router-dom";

export interface iUserProviderProps {
    children: React.ReactNode;
}
export interface iUserProviderValue {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    navigate: NavigateFunction
    userRegister(data: iRegisterUser): void,
    registerError: boolean,
    setRegisterError: React.Dispatch<React.SetStateAction<boolean>>
    userLogin(data:iLoginUser): void
}

export interface iRegisterUser {
    email: string,
    name: string,
    password: string,
    passwordConfirmed?: string
}

export interface iRegisterReset {
    email: string,
    password: string
}

export interface iLoginUser {
    email: string,
    password:string
}
