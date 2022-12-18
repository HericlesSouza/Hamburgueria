import { StyledButton, StyledDiv } from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { iProductCart } from "../../../contexts/CartContext/types";

export const ValueTotal = () => {
  const { setProductCart, quantityProductCart, setQuantityProductCart} = useContext(CartContext);

  const valueTotalAllProducts = quantityProductCart.reduce((accumulator:string, currentValue:iProductCart) => accumulator + currentValue.price, 0)

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(typeof valueTotalAllProducts === "string" ? Number(valueTotalAllProducts) : valueTotalAllProducts);

  const removeAllProducts = () => {
    setProductCart([])
    setQuantityProductCart([])
  }
  
  return (
    <StyledDiv>
      <div>
        <h6>Total</h6>
        <span>{formattedPrice}</span>
      </div>
      <StyledButton
        buttonColor={"btnGrey"}
        buttonSize={"medium"}
        margin={"20px 0"}
        onClick={removeAllProducts}
      >
        Remover todos
      </StyledButton>
    </StyledDiv>
  );
};
