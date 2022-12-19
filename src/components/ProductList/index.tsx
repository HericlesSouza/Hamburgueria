import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Product } from "./Product";
import { StyledUl, StyledDiv, IconNotFound } from "./style.js";

interface iProduct {
  id: string;
  name: string;
  category: string;
  price: string | number;
  img: string;
}

export const List = () => {
  const { menuItem, searchedItem, valueInput } = useContext(CartContext);
 
  return (
    <StyledDiv>
      <StyledUl>
        {searchedItem.length > 0 ? (
          searchedItem.map((item: iProduct) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                image={item.img}
              />
            );
          })
        ) : valueInput.length > 0 && searchedItem.length <= 0 ? (
          <div className="div-not-found-item">
            <IconNotFound size={300} className="animated-icon"/>
            <h1>Infelizmente não temos esse produto em estoque no momento!</h1>
          </div>
        ) : (
          menuItem.map((item: iProduct) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                image={item.img}
              />
            );
          })
        )}
      </StyledUl>
    </StyledDiv>
  );
};
