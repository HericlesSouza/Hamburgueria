import { useContext, useEffect, useState } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { List } from "../../components/ProductList";
import "animate.css"
import { StyledDiv } from "./style";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const {reload, setReload, tokenUser} = useContext(CartContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!tokenUser) {
      navigate('/')
    }
    if(reload) {
      setReload(false)
    }
  },[])

  return (
    <>
      <StyledDiv className="animate__animated animate__fadeInLeft">
        <Header />
        <List />
        <Cart />
      </StyledDiv>
    </>
  );
};
