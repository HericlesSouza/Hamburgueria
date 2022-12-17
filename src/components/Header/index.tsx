import { Headers, NewButton } from "./style.js";
import { FaSearch } from "react-icons/fa";
import Logo from "/src/assets/logo.png";
import * as React from "react";


export const Header = () => {


  return (
    <Headers>
      <div className="container">
        <figure>
          <img src={Logo} alt="Logo Burguer Kenzie" />
        </figure>
        <div>
          <input type="text" placeholder="Digitar Pesquisa" />
          <NewButton buttonColor={"btnGreen"} buttonSize={"small"}>
            <FaSearch size={13} />
          </NewButton>
         
        </div>
      </div>
    </Headers>
  );
};
