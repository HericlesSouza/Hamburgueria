import styled from "styled-components";


export const StyledLi = styled.li`
  min-width: 300px;
  height: 350px;
  background: ${({theme}) => theme.colors.white};
  border: 2px solid ${({theme}) => theme.colors.grey100};
  border-radius: var(--border-radius-1);

  :hover {
    border: 2px solid ${({theme}) => theme.colors.colorPrimary};
  }

  @media (max-width: 320px) {
    min-width: 250px;
  }

  @media (min-width: 1024px) {
    max-width: 250px;
    min-width: 250px;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    background: ${({theme}) => theme.colors.grey0};
  }

  figure > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 0 19px;
  }

  h2 {
    margin-top: 26px;
    font-weight: var(--font-weight-3);
    font-size: var(--heading-3);
    line-height: 24px;
    color: ${({theme}) => theme.colors.grey600};
  }

  .category {
    font-size: var(--heading-5);
    line-height: 16px;
    color: ${({theme}) => theme.colors.grey300};
  }

  .price {
    font-weight: var(--font-weight-2);
    font-size: var(--heading-4);
    line-height: 16px;
    color: ${({theme}) => theme.colors.grey300};
    line-height: 24px;
    color: ${({theme}) => theme.colors.colorPrimary};
  }
`;

