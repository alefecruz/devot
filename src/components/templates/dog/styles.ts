import styled, { css } from 'styled-components';
import { IDogInfo } from './interfaces';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const SendBox = styled.div`
    width: 70%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
    border: 10px solid ${({ theme }) => theme.COLORS.PRIMARY};
    border-right-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DrawBox = styled.div`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    display: grid;
    width: 500px;
    height: 500px;
    border: 10px solid ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const Square = styled.div<{ isPainted: boolean }>`
    position: relative;
    border: 1px solid ${({ theme }) => theme.COLORS.ACCENTED};
    display: flex;
    justify-content: center;
    background-color: ${({ theme, isPainted }) =>
        isPainted && theme.COLORS.BASE};
    align-items: center;
`;

export const DogPlayer = styled.div<{ direction: IDogInfo['direction'] }>`
    position: absolute;
    ${({ direction }) => {
        switch (direction) {
            case 'RIGHT':
                return css`
                    margin-top: 10px;
                    transform: rotate(0deg);
                `;
            case 'LEFT':
                return css`
                    margin-bottom: 10px;
                    transform: rotate(180deg);
                `;
            case 'TOP':
                return css`
                    margin-left: 10px;
                    transform: rotate(270deg);
                `;
            case 'BOTTOM':
                return css`
                    margin-right: 10px;
                    transform: rotate(90deg);
                `;
            default:
                return '';
        }
    }}
`;

export const ActionBox = styled.div`
    width: 30%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.BASE};
    border: 10px solid ${({ theme }) => theme.COLORS.PRIMARY};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    column-gap: 50px;
    row-gap: 25px;
    justify-content: center;
    align-items: center;
`;

export const ActionHandleList = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    column-gap: 10px;
`;
export const ActionHandleItem = styled.div`
    display: flex;
    align-items: center;
`;

export const ActionHandle = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 20px;
`;

export const MainActions = styled.div`
    margin: 20px;
    display: flex;
    row-gap: 5px;

    flex-direction: column;
`;
