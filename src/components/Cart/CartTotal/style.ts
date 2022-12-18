import styled from "styled-components";
import { ButtonStyled } from "../../../styles/Button";


export const StyledDiv = styled.div`
  padding: 0 18px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div > h6 {
    font-weight: var(--font-weight-2);
    font-size: var(--heading-4);
    line-height: 24px;
    color: ${({theme}) => theme.colors.grey600};
  }

  div > span {
    font-weight: var(--font-weight-2);
    font-size: var(--heading-4);
    line-height: 24px;
    color: ${({theme}) => theme.colors.grey300};
  }
`;

export const StyledButton = styled(ButtonStyled)`
  width: 100%;
  margin: 20px 0;
`;
