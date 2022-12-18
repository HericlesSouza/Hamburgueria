import { HiShoppingCart } from "react-icons/hi";
import styled from "styled-components";
import { ButtonStyled } from "../../styles/Button";
import { MdLogout } from "react-icons/md"
import { FaSearch } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai"

export const Headers = styled.header`  
  div {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  padding: 25px 0;
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

  .div-options {
    display: flex;
    align-items: center;
    gap: 23px;

    @media (max-width: 320px) {
      gap: 10px;
    }
    
    .div-input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.grey100};
      border-radius: var(--border-radius-2);
  
      input {
          max-width: 75%;
          font-size: var(--heading-4);
          line-height: 19px;
          color:  ${({ theme }) => theme.colors.grey300};
          font-family: 'Inter',sans-serif;
          border: none;
          outline: none;
      }
  
      input::placeholder {
          color: ${({ theme }) => theme.colors.grey100};
      }

    }

    #input-mobile {
      display: flex;
      z-index: 2;
      position: absolute;
      top: 10px;
      left: 0;
      right: 7px;
      margin: 0 auto;
      width: 90%;
      
      input {
        width: 100%;
      }

      @media (min-width: 700px) {
        display: none;
      }
    }
    
    @media (max-width: 700px) {
      .div-input {
        display: none;
      }
    }

    .shopping-car {
      position: relative;

      .div-counter {
        display: flex;
        justify-content: center;
        padding: 12px 13px;
        position: absolute;
        top: -12px;
        right: -10px;
        background: ${({ theme }) => theme.colors.colorPrimary};
        border-radius: var(--border-radius-2);
        height: 25px;
        width: 20px;

        span {    
          font-weight: var(--font-weight-5);
          font-size: var(--heading-5);
          color: #FFFFFF;
        }
      }

     
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

export const ButtonSearch = styled(ButtonStyled)`
  padding: 5px 15px;
`

export const ShoppingCar = styled(HiShoppingCart)`
  position: relative;
  cursor: pointer;
  color:  ${({ theme }) => theme.colors.grey300};

  :hover {
    color:  ${({ theme }) => theme.colors.colorPrimary};
  }
`

export const IconLogout = styled(MdLogout)`
  cursor: pointer;
  color:  ${({ theme }) => theme.colors.grey300};

  :hover {
    color:  ${({ theme }) => theme.colors.colorPrimary};
  }
`

export const MobileSearch = styled(FaSearch)`
  color: ${({ theme }) => theme.colors.grey300};

  @media (min-width: 700px) {
    display: none;
  }
`

export const CloseInput = styled(AiOutlineClose)`

`
