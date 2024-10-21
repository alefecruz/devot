import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    box-shadow: 0 0 10px -5px ${({ theme }) => theme.COLORS.SHADOW};
    row-gap: ${({ theme }) => theme.SPACINGS.SMALL};
    border: 1px solid ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const OptionContent = styled.div`
    border-radius: 50px;
    background-color: ${({ theme }) => theme.COLORS.BASE};
    &:hover {
        background-color: ${({ theme }) => theme.COLORS.SECONDARY};
    }
`;
