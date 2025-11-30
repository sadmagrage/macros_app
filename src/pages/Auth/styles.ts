import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background };
`;

export const AuthForm = styled.div`
    width: 600px;
    height: 350px;
    background-color: ${({ theme }) => theme.surface };
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ theme }) => theme.shadow };
`;

export const AuthTitle = styled.h2`
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary };
    letter-spacing: 0.5px;
    margin-bottom: 20px;
`;

export const AuthFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 16px;
`;

export const AuthLabel = styled.label`
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary };
    display: block;
    margin-bottom: 5px;
`;

export const AuthInputText = styled.input`
    width: calc(100% - 5px);
    height: 40px;
    padding: 5px 5px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.surfaceSecondary };
    border: 1px solid ${({ theme }) => theme.borderLight };
    color: ${({ theme }) => theme.textSecondary };
    font-size: 15px;

    &:focus {
        border-color: ${({ theme }) => theme.primary };
        box-shadow: 0 0 0 2px rgba(76,201,240,0.3);
        outline: none;
    }
`;

export const AuthInputButton = styled.button`
    width: 90%;
    background-color: ${({ theme }) => theme.primary };
    text-align: center;
    border-radius: 8px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.inputBorder };
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 10px;

    &:hover { filter: brightness(1.08) }
    &:active { transform: scale(0.98) }
`;