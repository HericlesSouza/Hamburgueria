import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { iProductCart } from "../../contexts/CartContext/types";
import { ModalWrapper } from "../Modal";
import { Product } from "./CartProduct";
import { ValueTotal } from "./CartTotal";
import { CloseButtonModal, DivStyle } from "./style";
import "animate.css";

export const Cart = () => {
  const { modal, setModal, productCart } = useContext(CartContext);
  const [classModal, setClassModal] = useState(
    "animate__animated animate__fadeInDown"
  );

  const closeModal = () => {
    setClassModal("animate__animated animate__fadeOutUp");

    setTimeout(() => {
      setClassModal("animate__animated animate__fadeInDown");
      setModal(false);
    }, 700);

  };

  return (
    <>
      {modal && (
        <ModalWrapper>
          <DivStyle className={classModal}>
            <div className="div-title-cart">
              <h2>Carrinho de compras</h2>
              <CloseButtonModal size={30} onClick={closeModal} />
            </div>
            {productCart.length == 0 ? (
              <div className="div-no-items">
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
              </div>
            ) : (
              <>
                <ul>
                  {productCart.map((item: iProductCart) => {
                    return (
                      <Product
                        key={item.id}
                        image={item.image}
                        price={item.price}
                        name={item.name}
                        id={item.id}
                      />
                    );
                  })}
                </ul>
                <div className="border"></div>
                <ValueTotal />
              </>
            )}
          </DivStyle>
        </ModalWrapper>
      )}
    </>
  );
};
