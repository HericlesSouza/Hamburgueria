import { ButtonStyled } from "../../../styles/Button";
import { StyledLi } from "./style";

interface iProduct {
    id: string,
    name: string,
    category: string,
    price: string | number,
    image: string
}

export const Product = ({ id, name, category, price, image}:iProduct) => {
  

    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(typeof price === "string" ? Number(price) : price);

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
