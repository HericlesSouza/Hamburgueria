import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  margin-right: 20px;

  @media (max-width: 1023px) {
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 20px auto 0 auto;
    }
  }

  .div-search {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 480px) {
    .div-search {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (min-width: 1024px) {

    display: flex;
    justify-content: center;
    align-items: center;

    .div-search {
      width: 100%;
      margin: 20px 0 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
  }

  .div-search > h1 {
    margin-bottom: 10px;
  }

  h1 {
    font-weight: var(--font-weight-3);
    font-size: var(--heading-1);
    line-height: 34px;
    color: var(--color-gray-100);
  }

  h1 > span {
    font-weight: var(--font-weight-3);
    font-size: var(--heading-1);
    line-height: 34px;
    color: var(--color-gray-50);
  }
`;

export const StyledUl = styled.ul`
  margin-top: 35px;
  display: flex;
  gap: 20px;
  overflow-x: auto;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    width: 100%;
    overflow-x: visible;
    max-width: 846px;
    margin: 40px 0;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    width: 90%;
    max-width: 1200px;
    margin: 35px auto 0 auto
  }
`;
