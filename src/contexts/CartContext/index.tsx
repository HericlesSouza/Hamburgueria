import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { iCartProvider, iCartProviderValue} from "./types";

export const CartContext = createContext({} as iCartProviderValue);

export const CartProvider = ({ children }: iCartProvider) => {
    const item = localStorage.getItem('@token');
    const tokenUser = item ? JSON.parse(item) : null;
    const [token, setToken] = useState<string | null>(tokenUser);
    const [menuItem, setMenuItem] = useState([] as [])
    const [searchedItem, setSearchedItem] = useState([])
    const [modal, setModal] = useState(false)
    const [productCart, setProductCart] = useState([])
    const [quantityProductCart, setQuantityProductCart] = useState([])
    const [validToken, setValidToken] = useState(false)
    const [reload, setReload] = useState(true)

    useEffect(() => {
        const getMenu = async () => {
            try {
                const response = await api.get('/products', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setValidToken(true)
                setMenuItem(response.data)
            } catch (err) {
            }
        }
        getMenu()
    }, [])

    return (
      <CartContext.Provider value={{ token, setToken, menuItem, searchedItem, setSearchedItem, modal, setModal, productCart, setProductCart, quantityProductCart, setQuantityProductCart, validToken, reload, setReload, tokenUser}}>
        {children}
      </CartContext.Provider>
    );
  };
  