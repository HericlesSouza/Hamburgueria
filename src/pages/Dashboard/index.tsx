import { useContext, useEffect } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { List } from "../../components/ProductList";
import { AuthContext } from "../../contexts/AuthProvider";
import "animate.css"
import { StyledDiv } from "./style";
export const DashboardPage = () => {
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
