import styled from "styled-components";

interface iForm {
    margin: string, 
  }

export const StyledForm = styled.form<iForm>`
    margin-top: ${({margin}) => margin};
    border: 2px solid ${({ theme }) => theme.colors.grey0};
    box-shadow: 0px 0px 30px -20px ${({ theme }) => theme.shadow.boxShadow};
    border-radius: var(--border-radius-1);
    width: 100%;
    max-width: 500px;
    height: max-content;
`