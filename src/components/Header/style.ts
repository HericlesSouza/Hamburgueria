import styled from "styled-components";
import { ButtonStyled } from "../../styles/Button";

export const Headers = styled.header`
  padding: 14px 0;
  background: ${({ theme }) => theme.colors.grey0};

  & > div {
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  div > figure {
    display: flex;
    justify-content: center;
  }

  div > div {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.grey100};
    border-radius: var(--border-radius-2);

    input {
        font-size: var(--heading-4);
        line-height: 19px;
        color:  ${({ theme }) => theme.colors.grey100};
        border: none;
        outline: none;
    }

    input::placeholder {
        color: ${({ theme }) => theme.colors.grey100};
    }
  }

  @media (min-width: 1024px) {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const NewButton = styled(ButtonStyled)`
    padding: 5px 15px;
`


