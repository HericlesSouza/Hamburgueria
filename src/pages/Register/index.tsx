import { StyledDiv } from "./style";
import { FormRegister } from "../../components/Form/RegisterForm";
import Logo from "../../assets/Burguer_Kenzie.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";
import Circles from "../../assets/circles.svg";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import "animate.css";
import { UserContext } from "../../contexts/UserContext";

export const RegisterPage = () => {
  const { checkValidUser } = useContext(AuthContext);
  const { darkMode, setDarkMode } = useContext(UserContext);

  useEffect(() => {
    checkValidUser("/register");
    if (darkMode) {
      setDarkMode(false);
    }
  }, []);

  return (
    <StyledDiv className="animate__animated animate__fadeInLeft">
      <div className="divContent">
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <div className="divHeader">
          <div className="divBag">
            <img src={ShoppingBag} alt="" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <span>melhores</span> ingredientes.
          </p>
        </div>
        <div className="circles">
          <img src={Circles} alt="" />
        </div>
      </div>
      <FormRegister />
    </StyledDiv>
  );
};
