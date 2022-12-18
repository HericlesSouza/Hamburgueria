import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";

export const DivStyle = styled.div`
  position: fixed;
  top: 100px;
  margin-top: 20px;
  margin-bottom: 22px;
  min-height: 223px;
  height: max-content;
  background: ${({ theme }) => theme.colors.white};
  border-radius: var(--border-radius-1);
  width: 90%;
  max-width: 500px;
  margin: 20px auto 0 auto;

  @media (min-width: 1024px) {
    width: 100%;
    margin: 20px 0px;
  }

  .div-title-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    background: ${({ theme }) => theme.colors.colorPrimary};
    border-radius: 5px 5px 0px 0px;
  }

  .div-title-cart > h2 {
      font-weight: var(--font-weight-3);
      font-size: var(--heading-3);
      line-height: 24px;
      color: ${({ theme }) => theme.colors.white};
      text-align: center;  
  }

  .div-no-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 18px;
    gap: 10px;
    min-height: 153px;
  }

  .div-no-items > h2 {
    text-align: center;
    font-weight: var(--font-weight-3);
    font-size: var(--heading-2);
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey600};
  }

  .div-no-items > span {
    font-size: var(--heading-4);
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey300};
  }

  ul {
    padding: 0 19px;
    max-height: 300px;
    margin-bottom: 21px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 20px;
      border: 3px solid var(--color-primary);
    }
  }

  .border {
    margin-top: 21px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey100};
  }
`;

export const CloseButtonModal = styled(AiOutlineCloseCircle)`
    color: #ffff;
    cursor: pointer;
    
    :hover {
        color: ${({ theme }) => theme.colors.grey100};
    }
`