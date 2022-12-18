import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iCartProvider, iCartProviderValue } from "./types";

export const CartContext = createContext({} as iCartProviderValue);

export const CartProvider = ({ children }: iCartProvider) => {
    const item = localStorage.getItem('@token');
    const tokenUser = item ? JSON.parse(item) : null;
    const [token, setToken] = useState<string | null>(tokenUser);
    const [menuItem, setMenuItem] = useState([] as [])
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    console.log('hey')
    useEffect(() => {
        const getMenu = async () => {
            try {
                const response = await api.get('/products', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setMenuItem(response.data)
            } catch (err) {
                navigate('/')
            }
        }
        getMenu()
    }, [])
    return (
      <CartContext.Provider value={{ token, setToken, menuItem, modal, setModal}}>
        {children}
      </CartContext.Provider>
    );
  };
  