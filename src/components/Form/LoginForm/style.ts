import styled from "styled-components";

export const StyledDiv = styled.div`
    padding: 20px;

    h1 {
        font-weight: var(--font-weight-3);
        font-size: var(--heading-2);
        line-height: 24px;
        color: ${({ theme }) => theme.colors.grey600};
        margin-bottom: 25px;
    }

    .input-content  {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .paragraph-account {
            align-self: center;
            max-width: 240px;
            font-size: 0.875rem;
            line-height: var(--heading-3);
            text-align: center;
            color: ${({ theme }) => theme.colors.grey200};
        }
    }

    a {
        padding: 20.5px 20px;
        text-align: center;
        text-decoration: none;
        border-radius: var(--border-radius-2);
        font-weight: var(--font-weight-2);
        font-size: var(--heading-4);
        line-height: 19px;
        background: ${({ theme }) => theme.colors.grey100};
        border: 2px solid ${({ theme }) => theme.colors.grey100};
        color: ${({ theme }) => theme.colors.grey300};

        :hover {
            background: ${({ theme }) => theme.colors.grey300};
            border: 2px solid ${({ theme }) => theme.colors.grey300};
            color: ${({ theme }) => theme.colors.grey100};
            }
    }
`