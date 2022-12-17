import { StyledDiv } from "./style";
import { FormRegister } from "../../components/Form/RegisterForm";
import Logo from "../../assets/Burguer_Kenzie.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";
import Circles from "../../assets/circles.svg";

export const RegisterPage = () => {

  return (
    <StyledDiv>
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
