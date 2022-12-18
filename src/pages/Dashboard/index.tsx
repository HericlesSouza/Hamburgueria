import { useContext } from "react";
import { Header } from "../../components/Header";
import { Headers } from "../../components/Header/style";
import { List } from "../../components/ProductList";
import { CartContext } from "../../contexts/CartContext";

export const DashboardPage = () => {
  const { token, setToken, menuItem } = useContext(CartContext);

  return (
    <>
      <Header />
      <List />
    </>
  );
};
