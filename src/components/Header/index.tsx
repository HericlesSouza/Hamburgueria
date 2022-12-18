
import { FaSearch } from "react-icons/fa";
import { ButtonSearch, Headers, IconLogout, MobileSearch, ShoppingCar } from "./style";
import Logo from "/src/assets/logo.png";

export const Header = () => {
  
  return (
    <Headers>
      <div className="container">
        <figure>
          <img src={Logo} alt="Logo Burguer Kenzie" />
        </figure>
        <div className="div-options">
          <MobileSearch size={23} />
          <div className="div-input">
            <input type="text" placeholder="Digitar Pesquisa" />
            <ButtonSearch buttonColor={"btnGreen"} buttonSize={"small"}>
              <FaSearch size={13} />
            </ButtonSearch>
          </div>
          <div className="shopping-car">
            <ShoppingCar size={30}/>
            <div className="div-counter">
              <span>3</span>
            </div>
          </div>
          <IconLogout size={30}/>
        </div>
      </div>
    </Headers>
  );
};
