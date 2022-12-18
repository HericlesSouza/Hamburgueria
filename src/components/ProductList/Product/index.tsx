import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { iProductCart } from "../../../contexts/CartContext/types";
import { ButtonStyled } from "../../../styles/Button";
import { StyledLi } from "./style";

export const Product = ({ id, name, category, price, image}: iProductCart) => {
  const {productCart, setProductCart, quantityProductCart, setQuantityProductCart} = useContext(CartContext)

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(typeof price === "string" ? Number(price) : price);


  const addProductCart = () => {
    const product = {
      id: id,
      name: name,
      category: category,
      price: price,
      image: image
    }
    const checkProductExist = productCart.some((element:iProductCart) => element.id === product.id)

    if(!checkProductExist) {
      setProductCart([...productCart, product])
    }
    
    setQuantityProductCart([...quantityProductCart, product])
  }

  return (
    <>
      <StyledLi id={id}>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div>
          <h2>{name}</h2>
          <span className="category">{category}</span>
          <span className="price">{formattedPrice}</span>
          <ButtonStyled
            onClick={addProductCart}
            buttonColor={"btnGreen"}
            buttonSize={"small"}
            position={"flex-start"}
          >
            Adicionar
          </ButtonStyled>
        </div>
      </StyledLi>
    </>
  );
};
