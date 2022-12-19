import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi"
import { BsPlusCircleDotted, BsDashCircleDotted } from "react-icons/bs"

export const StyledLi = styled.li`
  display: flex;
  margin-top: 20px;
  gap: 10px;

  figure {
    min-width: 80px;
    min-height: 80px;
    max-width: 80px;
    max-height: 80px;
    background: ${({ theme }) => theme.colors.grey100};
    border-radius: var(--border-radius-1);
  }

  figure > img {
    width: 100%;
  }

  .div-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .div-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .div-header > h2 {
    font-weight: var(--font-weight-3);
    font-size: var(--heading-3);
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey600};
  }


  @media (max-width: 320px) {
    .div-header > h2 {
      font-size: var(--heading-4);
    }
  }

  .div-number-items {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 340px) {
      gap: 3px;
    }

    .div-span > span {
        font-weight: var(--font-weight-3);
        font-size: var(--heading-3);
        line-height: 16px;
        color: ${({ theme }) => theme.colors.grey600};
    }
  }

  .div-price {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span {
      font-size: var(--heading-5);
      color: ${({ theme }) => theme.colors.grey300};
      
    }

    @media (max-width: 340px) {
      span {
        font-size: var(--caption);
      }
    }
  }
`;

export const Trash = styled(FiTrash2)`
    color: ${({ theme }) => theme.colors.grey200};
    cursor: pointer;

    :hover {
        color: ${({ theme }) => theme.colors.colorPrimary};
    }
`

export const Subtract = styled(BsDashCircleDotted)`
    margin: 2px 8px 0 8px;
    cursor: pointer;
`

export const Add = styled(BsPlusCircleDotted)`
    margin: 2px 8px 0 8px;
    cursor: pointer;
`