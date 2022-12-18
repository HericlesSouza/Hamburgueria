import React from "react";

export interface iProductCart {
    id: string;
    name: string;
    category?: string;
    price: string | number;
    image: string;
}
export interface iCartProviderValue {
    token: string | null | undefined,
    menuItem: [],
    searchedItem: any,
    setSearchedItem: React.Dispatch<React.SetStateAction<any>>,
    setToken: React.Dispatch<React.SetStateAction<string | null>>,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    productCart: any,
    setProductCart: React.Dispatch<React.SetStateAction<any>>,
    quantityProductCart: any,
    setQuantityProductCart: React.Dispatch<React.SetStateAction<any>>,
    validToken: boolean,
}

export interface iCartProvider {
    children: React.ReactNode
}