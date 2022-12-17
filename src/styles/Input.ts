import styled from "styled-components";

export const StyledInput = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    
    &&.div-error{
        margin-top: 20px;
    }

    &&.div-error2{
        margin-top: 40px;
    }
    
    input {
        width: 100%;
        padding: 20px;
        background: ${({ theme }) => theme.colors.grey0};
        border: 2px solid ${({ theme }) => theme.colors.grey0};
        border-radius: var(--border-radius-2);
        outline: none;
        font-size: var(--heading-4);
        line-height: 19px;
        color: ${({ theme }) => theme.colors.grey300};
        font-weight: var(--font-weight-1);
        transition: 0.3s;
    }

    input:focus, input:focus:valid {
        border: 2px solid ${({ theme }) => theme.colors.colorPrimary};
        background: ${({ theme }) => theme.colors.white};
    }

    input:valid {
        background: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.grey300};
    }

    span {
        position: absolute;
        left: 10px;
        top: 10px;
        padding: 10px;
        pointer-events: none;
        font-size: var(--heading-6);
        color: ${({ theme }) => theme.colors.grey200};
        transition: 0.3s;
    }

    input:valid ~ span, input:focus ~ span{
        left: 0;
        top: 0;
        color: ${({ theme }) => theme.colors.grey300};
        transform: translateX(10px) translateY(-7px);
        font-size: var(--heading-3);
        padding: 0 10px;
        background: white;
        border-left: 2px solid ${({ theme }) => theme.colors.grey300};
        border-right: 2px solid ${({ theme }) => theme.colors.grey300};
        letter-spacing: 0.2em;
    }

    input:focus ~ span {
        border-left: 2px solid ${({ theme }) => theme.colors.colorPrimary};
        border-right: 2px solid ${({ theme }) => theme.colors.colorPrimary};
        color: ${({ theme }) => theme.colors.colorPrimary};
    }

    .error, .error:focus, .error:valid, .error:focus:valid {
        border: 2px solid ${({ theme }) => theme.colors.negative};
    }
    
    .error-span {
        color: ${({ theme }) => theme.colors.negative};
    }
    
    .error:focus ~ span, .error:valid ~ span {
        border-left: 2px solid ${({ theme }) => theme.colors.negative};
        border-right: 2px solid ${({ theme }) => theme.colors.negative};
        color: ${({ theme }) => theme.colors.negative};
    }
    
    .paragraph {
        position: relative;
        top: 5px;
        left: 10px;
    }
`