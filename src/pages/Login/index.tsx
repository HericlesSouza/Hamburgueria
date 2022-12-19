import { StyledDiv } from "./style";
import { FormLogin } from "../../components/Form/LoginForm";
import Logo from "../../assets/Burguer_Kenzie.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";
import Circles from "../../assets/circles.svg"
import { useEffect } from "react";
import 'animate.css'
import { useNavigate } from "react-router-dom";

export const PageLogin = () => {
  const item = localStorage.getItem('@token');
  const tokenUser = item ? JSON.parse(item) : null;
  const navigate = useNavigate()

  useEffect(() => {
    if(tokenUser) {
      navigate('/dashboard')
    }
  },[])
  
  return (
    <StyledDiv className="container animate__animated animate__fadeInLeft">
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
      <FormLogin />
    </StyledDiv>
  );
};
