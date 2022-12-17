import React from "react";

export interface iCartProviderValue {
    token: string | null | undefined
    menuItem: []
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export interface iCartProvider{
    children: React.ReactNode
}