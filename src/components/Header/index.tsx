import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";
import { iProductCart } from "../../contexts/CartContext/types";
import { UserContext } from "../../contexts/UserContext";
import {
  ButtonSearch,
  Headers,
  IconLogout,
  MobileSearch,
  ShoppingCar,
} from "./style";
import {AiOutlineClose} from "react-icons/ai"
import Logo from "/src/assets/logo.png";

export const Header = () => {
  const { menuItem, setModal, quantityProductCart, setSearchedItem } =
    useContext(CartContext);
  const { navigate } = useContext(UserContext);
  const [search, setSearch] = useState(false);
  const [valueInput, setValueInput] = useState('')

  const filterProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchedItem = menuItem.filter((element: iProductCart) =>
      element.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setValueInput(event.target.value)
    setSearchedItem(searchedItem);
  };

  const LogoutUser = () => {
    const key = Object.keys(localStorage);

    key.map((element: any) => {
      if (element !== "darkMode") {
        localStorage.removeItem(element);
      }
    });

    navigate("/");
  };

  const closeSearchedInput = () => {
    setSearch(false)
    setValueInput('')
    setSearchedItem([])
  }

  return (
    <Headers>
      <div className="container">
        <figure>
          <img src={Logo} alt="Logo Burguer Kenzie" />
        </figure>
        <div className="div-options">
          {search ? (
            <div id="input-mobile" className="div-input">
              <input
              value={valueInput}
                type="text"
                placeholder="Digitar Pesquisa"
                onChange={filterProducts}
              />
              <ButtonSearch buttonColor={"btnRed"} buttonSize={"small"} onClick={closeSearchedInput}>
                <AiOutlineClose size={20} color="#ffff"/>
              </ButtonSearch>
            </div>
          ) : (
            <MobileSearch size={23} onClick={() => {setSearch(true)}}/>
          )}
          <div className="div-input">
              <input
                type="text"
                value={valueInput}
                placeholder="Digitar Pesquisa"
                onChange={filterProducts}
              />
              <ButtonSearch buttonColor={"btnGreen"} buttonSize={"small"}>
                <FaSearch size={13} />
              </ButtonSearch>
            </div>
          <div className="shopping-car" onClick={() => setModal(true)}>
            <ShoppingCar size={30} />
            <div className="div-counter">
              <span>{quantityProductCart.length}</span>
            </div>
          </div>
          <IconLogout size={30} onClick={LogoutUser} />
        </div>
      </div>
    </Headers>
  );
};
