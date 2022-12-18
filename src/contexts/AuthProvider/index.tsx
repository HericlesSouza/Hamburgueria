import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iAuthProvider, iAuthProviderValue} from "./types";

export const AuthContext = createContext({} as iAuthProviderValue);

export const AuthProvider = ({ children }: iAuthProvider) => {
    const item = localStorage.getItem('@token');
    const tokenUser = item ? JSON.parse(item) : null;
    const navigate = useNavigate()

    const checkValidUser = (rota:string) => {
        if(tokenUser) {
            navigate('/dashboard')
        } else {
            navigate(rota)
        }
    }

    return (
      <AuthContext.Provider value={{checkValidUser}}>
        {children}
      </AuthContext.Provider>
    );
  };
  