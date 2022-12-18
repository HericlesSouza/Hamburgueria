import { Add, StyledLi, Subtract, Trash } from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useState } from "react";

interface iProduct {
  img: string;
  name: string;
  category: string;
  id: string;
}

export const Product = ({ img, name, category, id }: iProduct) => {
  return (
    <StyledLi id={id}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="div-content">
        <div className="div-header">
          <h2>{name}</h2>
          <Trash size={23}/>
        </div>
        <div className="div-number-items">
            <div className="div-subtract">
                <Subtract size={20} color="red" />
            </div>
            <div className="div-span">
                <span>8</span>
            </div>
            <div>
                <Add size={20}/>
            </div>
        </div>
      </div>
    </StyledLi>
  );
};
