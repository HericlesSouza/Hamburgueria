import React from "react";

export interface iCartProviderValue {
    token: string | null | undefined
    menuItem: []
    setToken: React.Dispatch<React.SetStateAction<string | null>>
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface iCartProvider{
    children: React.ReactNode
}