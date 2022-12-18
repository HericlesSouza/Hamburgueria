import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ModalWrapper } from "../Modal";
import { Product } from "./CartProduct";
import { ValueTotal } from "./CartTotal";
// import { Product } from "./CartProduct";
// import { ValueTotal } from "./CartTotal";
import { CloseButtonModal, DivStyle } from "./style";

interface iProduct {
  id: string;
  name: string;
  category: string;
  price: string | number;
  img: string;
}

export const Cart = () => {
  const { modal, setModal, menuItem } = useContext(CartContext);
  console.log("oi");
  return (
    <>
      {modal && (
        <ModalWrapper>
          <DivStyle>
            <div className="div-title-cart">
              <h2>Carrinho de compras</h2>
              <CloseButtonModal size={30} onClick={() => setModal(false)} />
            </div>
            {/* <div className="div-no-items">
              <h2>Sua sacola está vazia</h2>
              <span>Adicione itens</span>
            </div> */}

            <>
              <ul>
                {menuItem.map((item: iProduct) => {
                  return (
                    <Product
                      key={item.id}
                      img={item.img}
                      name={item.name}
                      category={item.category}
                      id={item.id}
                    />
                  );
                })}
                <div className="border"></div>
              </ul>
              {/* <ValueTotal setProductCart={setListProductsCart} price={value} /> */}
              <ValueTotal/>
            </>
          </DivStyle>
        </ModalWrapper>
      )}
    </>
  );
};
