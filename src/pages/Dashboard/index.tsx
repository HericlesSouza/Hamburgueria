import { useContext, useEffect } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { List } from "../../components/ProductList";
import { AuthContext } from "../../contexts/AuthProvider";
import "animate.css"
export const DashboardPage = () => {
  const { checkValidUser } = useContext(AuthContext);

  useEffect(() => {
    checkValidUser("/");
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeInLeft">
        <Header />
        <List />
        <Cart />
      </div>
    </>
  );
};
