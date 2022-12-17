import styled, { css }  from "styled-components";

interface iButton {
    margin?: string,
    position?: string
    buttonColor: 'btnGreen' | 'btnGrey',
    buttonSize: 'small' | 'medium'
}
export const ButtonStyled = styled.button <iButton>`

    border-radius: var(--border-radius-2);
    font-weight: var(--font-weight-2);
    font-size: var(--heading-4);
    line-height: 19px;
    margin: ${(props) => props.margin};
    align-self: ${(props) => props.position};

    &&.div-error {
        margin-top: 20px;
    }
    
    &&.div-error2{
        margin-top: 40px;
    }
    
    ${({ buttonColor }) => {
        switch (buttonColor) {
            case "btnGreen":
                return css`
                background: ${({theme}) => theme.colors.colorPrimary};
                border: 2px solid ${({theme}) => theme.colors.colorPrimary};
                color: ${({theme}) => theme.colors.white};

                :hover {
                    filter: brightness(0.9);
                }
                `;
            case "btnGrey":
                return css`
                background: ${({theme}) => theme.colors.grey100};
                border: 2px solid ${({theme}) => theme.colors.grey100};
                color: ${({theme}) => theme.colors.grey300};

                :hover {
                    background: ${({theme}) => theme.colors.grey300};
                    border: 2px solid ${({theme}) => theme.colors.grey300};
                    color: ${({theme}) => theme.colors.grey100};
                }
                `;
        }
    }}

    ${({ buttonSize }) => {
        switch (buttonSize) {
            case "small":
                return css`
                padding: 10.5px 20px;
                text-align: center;
                `;
            case "medium":
                return css`
                padding: 20.5px 20px;
                text-align: center;
                `;
        }
    }};
`