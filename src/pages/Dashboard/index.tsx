import { useContext, useEffect } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { List } from "../../components/ProductList";
import { AuthContext } from "../../contexts/AuthProvider";

export const DashboardPage = () => {
  const {checkValidUser} = useContext(AuthContext)
  
  useEffect(() => {
    checkValidUser('/')
  }, [])
  
  return (
    <>
      <Header />
      <List />
      <Cart/>
    </>
  );
};
