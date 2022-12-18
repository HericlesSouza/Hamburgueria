import { Add, StyledLi, Subtract, Trash } from "./style";
import "animate.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { iProductCart } from "../../../contexts/CartContext/types";

export const Product = ({ image, name, price, id }: iProductCart) => {
  const {
    productCart,
    setProductCart,
    quantityProductCart,
    setQuantityProductCart,
  } = useContext(CartContext);

  const [classAnimateRemoveItem, setClassAnimateRemoveItem] = useState("");

  const deleteProduct = () => {
    const newArrayProduct = productCart.filter(
      (item: iProductCart) => item.id !== id
    );
    const newArrayQuantityProduct = quantityProductCart.filter(
      (item: iProductCart) => item.id !== id
    );
    setClassAnimateRemoveItem("animate__animated animate__fadeOutLeft");

    setTimeout(() => {
      setProductCart(newArrayProduct);
      setQuantityProductCart(newArrayQuantityProduct);
      setClassAnimateRemoveItem("");
    }, 700);
  };

  const quantity = quantityProductCart.filter(
    (item: iProductCart) => item.id === id
  );

  const valueTotalProduct = quantity.reduce(
    (accumulator: string, currentValue: iProductCart) =>
      accumulator + currentValue.price,
    0
  );

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(
    typeof valueTotalProduct === "string"
      ? Number(valueTotalProduct)
      : valueTotalProduct
  );

  const addProduct = () => {
    const product = {
      id: id,
      name: name,
      price: price,
      image: image,
    };

    setQuantityProductCart([...quantityProductCart, product]);
  };

  const removeProduct = () => {
    const findProduct = quantityProductCart.find(
      (element: iProductCart) => element.id === id
    );
    const deletedItem = quantityProductCart.filter(
      (element: iProductCart) => element !== findProduct
    );

    if (quantity.length === 1) {
      setClassAnimateRemoveItem("animate__animated animate__fadeOutLeft");

      setTimeout(() => {
        const deletedItem = productCart.filter(
          (element: iProductCart) => element.id !== findProduct.id
        );
        setProductCart(deletedItem);
        setClassAnimateRemoveItem("");
      }, 700);
    }

    setQuantityProductCart(deletedItem);
  };

  return (
    <StyledLi id={id} className={classAnimateRemoveItem}>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="div-content">
        <div className="div-header">
          <h2>{name}</h2>
          <Trash size={23} onClick={deleteProduct} />
        </div>
        <div className="div-number-items">
          <div className="div-subtract">
            <Subtract size={20} color="red" onClick={removeProduct} />
          </div>
          <div className="div-span">
            <span>{quantity.length}</span>
          </div>
          <div>
            <Add size={20} color="red" onClick={addProduct} />
          </div>
          <div className="div-price">
            <span>{formattedPrice}</span>
          </div>
        </div>
      </div>
    </StyledLi>
  );
};
