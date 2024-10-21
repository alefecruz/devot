import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border: 1px solid ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const Toggle = styled.button<{ toggleValue: boolean }>`
    cursor: pointer;
    padding: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, toggleValue }) =>
        toggleValue ? theme.COLORS.BASE : theme.COLORS.BASE};
    border-radius: 100%;
    border: none;
    &:hover {
        background-color: ${({ theme }) => theme.COLORS.SECONDARY};
    }
`;

export const IconContent = styled.div``;
