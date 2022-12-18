import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Product } from "./Product";
import { StyledUl, StyledDiv } from "./style.js";

interface iProduct {
  id: string;
  name: string;
  category: string;
  price: string | number;
  img: string;
}

export const List = () => {
  const { menuItem, searchedItem } = useContext(CartContext);

  return (
    <StyledDiv>
      <StyledUl>
        {searchedItem.length > 0
          ? searchedItem.map((item: iProduct) => {
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
          : menuItem.map((item: iProduct) => {
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
            })}
      </StyledUl>
    </StyledDiv>
  );
};
