import styled from "styled-components";

export const StyledDiv = styled.div`
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 1024px) {
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 140px;
    }

    .divContent {
        display: flex;
        flex-direction: column;
        gap: 30px;

        figure {
            margin-top: 40px;
            display: flex;
            justify-content: center;

            @media (min-width: 1024px) {
                justify-content: flex-start;
                margin-top: 0;
            }
        }
        
        .divHeader {
            display: flex;
            padding: 15px;
            justify-content: space-between;
            width: 100%;
            max-width: 500px;
            border: 1px solid ${({ theme }) => theme.colors.grey100};
            box-shadow: 0px 0px 20px -20px ${({ theme }) => theme.colors.boxShadow};
            border-radius: var(--border-radius-1);
    
            @media (min-width: 1024px) {
                margin-top: 0;
                max-width: 380px;
            }
            
            .divBag {
                min-width: 80px;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${({ theme }) => theme.colors.backgroundGreen};
                border-radius: var(--border-radius-1);
            }
    
            .divBag > img {
                width: 35px;
                height: 35px;
            }
    
            & > p {
                margin-left: 20px;
                font-size: var(--heading-5);
                line-height: 22px;
                color: ${({ theme }) => theme.colors.grey300}
            }
    
            p > span {
                line-height: 22px;
                color: ${({ theme }) => theme.colors.colorPrimary};
            }
        }

        .circles {
            display: none;

            @media (min-width: 1024px){
                display: block;
            }
        }
    }

`