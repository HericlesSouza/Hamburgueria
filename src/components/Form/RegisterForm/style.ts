import styled from "styled-components";

export const StyledDiv = styled.div`
    padding: 20px;

    .div-header {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h1 {
            font-weight: var(--font-weight-3);
            font-size: var(--heading-2);
            line-height: 24px;
            color: ${({ theme }) => theme.colors.grey600};
            margin-bottom: 25px;
        }

        a {
            font-weight: var(--font-weight-1);
            font-size: var(--heading-3);
            line-height: 22px;
            text-decoration-line: none;
            color: ${({ theme }) => theme.colors.grey300};

            :hover {
                text-decoration: underline;
            }
        }
    }

    .input-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`