import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { iProductCart } from "../../contexts/CartContext/types";
import { ModalWrapper } from "../Modal";
import { Product } from "./CartProduct";
import { ValueTotal } from "./CartTotal";
// import { Product } from "./CartProduct";
// import { ValueTotal } from "./CartTotal";
import { CloseButtonModal, DivStyle } from "./style";

export const Cart = () => {
  const { modal, setModal, menuItem, productCart } = useContext(CartContext);
  
  return (
    <>
      {modal && (
        <ModalWrapper>
          <DivStyle>
            <div className="div-title-cart">
              <h2>Carrinho de compras</h2>
              <CloseButtonModal size={30} onClick={() => setModal(false)} />
            </div>
            {productCart.length == 0 ? (
              <div className="div-no-items">
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
              </div>
            ) : (
              <>
                <ul>
                  {productCart.map((item: iProductCart, index:number) => {
                    return (
                      <Product
                        key={index}
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
