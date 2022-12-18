import { StyledButton, StyledDiv } from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ValueTotal = () => {
  return (
    <StyledDiv>
      <div>
        <h6>Total</h6>
        <span>R$ 20,00</span>
      </div>
      <StyledButton
        buttonColor={"btnGrey"}
        buttonSize={"medium"}
        margin={"20px 0"}
      >
        Remover todos
      </StyledButton>
    </StyledDiv>
  );
};
