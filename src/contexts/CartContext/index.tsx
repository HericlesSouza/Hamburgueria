import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { iCartProvider, iCartProviderValue } from "./types";

export const CartContext = createContext({} as iCartProviderValue);



export const CartProvider = ({ children }: iCartProvider) => {
    const item = localStorage.getItem('@token');
    const tokenUser = item ? JSON.parse(item) : null;
    const [token, setToken] = useState<string | null>(tokenUser);
    const [menuItem, setMenuItem] = useState([] as [])

    useEffect(() => {
        const getMenu = async () => {
            console.log(token)
            try {
                const response = await api.get('/products', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setMenuItem(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getMenu()
    }, [])
    return (
      <CartContext.Provider value={{ token, setToken, menuItem }}>
        {children}
      </CartContext.Provider>
    );
  };
  