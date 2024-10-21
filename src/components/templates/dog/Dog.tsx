'use client';

import { useState, type ReactElement } from 'react';

import * as S from './styles';
import { Icon } from '@/components/atoms/icon';
import { Button } from '@/components/molecules/button';
import { IDogInfo } from './interfaces';
import { Logo } from '@/components/molecules/logo';

const Dog = (): ReactElement => {
    const [actionList, setActionList] = useState<(keyof typeof actionMap)[]>(
        [],
    );
    const TOTAL_SQUARE_IN_ROW = 8;
    const GRID_LENGHT = TOTAL_SQUARE_IN_ROW * TOTAL_SQUARE_IN_ROW;
    const INITIAL_GRID = Array.from({ length: GRID_LENGHT }, () => ({
        isPainted: false,
    }));
    const [grid, setGrid] = useState(INITIAL_GRID);
    const [dogInfo, setDogInfo] = useState<IDogInfo>({
        position: 0,
        direction: 'RIGHT',
    });

    const actionMap = {
        RESET: (): IDogInfo => ({
            position: 0,
            direction: 'RIGHT',
        }),
        FLIP: (
            currPosition: IDogInfo['position'],
            currDirection: IDogInfo['direction'],
        ): IDogInfo => {
            if (currDirection === 'RIGHT')
                return {
                    position: currPosition,
                    direction: 'BOTTOM',
                };
            if (currDirection === 'BOTTOM')
                return {
                    position: currPosition,
                    direction: 'LEFT',
                };
            if (currDirection === 'LEFT')
                return {
                    position: currPosition,
                    direction: 'TOP',
                };
            else
                return {
                    position: currPosition,
                    direction: 'RIGHT',
                };
        },
        PAINT: (
            currPosition: IDogInfo['position'],
            currDirection: IDogInfo['direction'],
        ) => ({
            direction: currDirection,
            position: currPosition,
        }),
        WALK: (
            currPosition: IDogInfo['position'],
            currDirection: IDogInfo['direction'],
        ): IDogInfo => {
            if (
                currDirection === 'RIGHT' &&
                currPosition % TOTAL_SQUARE_IN_ROW !== 7
            )
                return {
                    direction: currDirection,
                    position: currPosition + 1,
                };
            if (
                currDirection === 'BOTTOM' &&
                currPosition < TOTAL_SQUARE_IN_ROW * TOTAL_SQUARE_IN_ROW - 7
            )
                return {
                    direction: currDirection,
                    position: currPosition + 8,
                };
            if (
                currDirection === 'LEFT' &&
                currPosition % TOTAL_SQUARE_IN_ROW !== 0
            )
                return {
                    direction: currDirection,
                    position: currPosition - 1,
                };
            if (currDirection === 'TOP' && currPosition > 7)
                return {
                    direction: currDirection,
                    position: currPosition - 8,
                };
            return {
                direction: currDirection,
                position: currPosition,
            };
        },
        RUN: (
            currPosition: IDogInfo['position'],
            currDirection: IDogInfo['direction'],
        ): IDogInfo => {
            if (
                currDirection === 'RIGHT' &&
                currPosition % TOTAL_SQUARE_IN_ROW !== 6
            )
                return {
                    direction: currDirection,
                    position: currPosition + 2,
                };
            if (
                currDirection === 'BOTTOM' &&
                currPosition < TOTAL_SQUARE_IN_ROW * TOTAL_SQUARE_IN_ROW - 15
            )
                return {
                    direction: currDirection,
                    position: currPosition + 16,
                };
            if (
                currDirection === 'LEFT' &&
                currPosition % TOTAL_SQUARE_IN_ROW !== 1
            )
                return {
                    direction: currDirection,
                    position: currPosition - 2,
                };
            if (currDirection === 'TOP' && currPosition > 15)
                return {
                    direction: currDirection,
                    position: currPosition - 16,
                };
            return {
                direction: currDirection,
                position: currPosition,
            };
        },
    };

    const translate: { [key in keyof typeof actionMap]: string } = {
        FLIP: 'Girar',
        PAINT: 'Pintar',
        RESET: 'Inicio',
        RUN: 'Correr',
        WALK: 'Andar',
    };

    const handleReset = () => {
        setGrid(INITIAL_GRID);
        setDogInfo({
            position: 0,
            direction: 'RIGHT',
        });
    };

    const handleAddAction = (action: keyof typeof actionMap) => {
        if (actionList.length < 50) setActionList((curr) => [...curr, action]);
    };

    const handleClear = () => {
        setActionList([]);
    };

    const handleExecute = () => {
        let currPosition = dogInfo.position;
        let currDirection = dogInfo.direction;
        const currGrid = [...grid];
        const paintedGrid: number[] = [];
        let dogIsPainting = false;
        actionList.forEach((action) => {
            if (action === 'PAINT') {
                dogIsPainting = !dogIsPainting;
            }
            const { direction, position } = actionMap[action](
                currPosition,
                currDirection,
            );
            currDirection = direction;
            currPosition = position;
            if (dogIsPainting) paintedGrid.push(currPosition);
            else paintedGrid.filter((grid) => grid !== currPosition);
            console.log('ACTION', direction, position);
        });
        setDogInfo({
            direction: currDirection,
            position: currPosition,
        });
        setGrid(
            currGrid.map((_, index) => ({
                isPainted: paintedGrid.includes(index),
            })),
        );
    };

    const handleRemove = (index: number) => {
        const actions = [...actionList];
        actions.splice(index, 1);
        setActionList(actions);
    };

    const renderDog = () => (
        <S.DogPlayer direction={dogInfo.direction}>
            <Icon name="DOG" size="LARGE" color="ACCENTED" />;
        </S.DogPlayer>
    );

    return (
        <S.Container>
            <S.SendBox>
                <S.DrawBox>
                    {grid.map((item, index) => (
                        <S.Square key={index} isPainted={item.isPainted}>
                            {dogInfo.position === index && renderDog()}
                        </S.Square>
                    ))}
                </S.DrawBox>
            </S.SendBox>
            <S.ActionBox>
                <Logo iconName="DEVOT" title="DEVOT" />

                <S.Actions>
                    <Button
                        format="FILLED_ACCENTED"
                        label="INICIO ()"
                        onPress={() => handleAddAction('RESET')}
                    />
                    <Button
                        format="FILLED_ACCENTED"
                        label="GIRAR ()"
                        onPress={() => handleAddAction('FLIP')}
                    />
                    <Button
                        format="FILLED_ACCENTED"
                        label="PINTAR ()"
                        onPress={() => handleAddAction('PAINT')}
                    />
                    <Button
                        format="FILLED_ACCENTED"
                        label="ANDAR ()"
                        onPress={() => handleAddAction('WALK')}
                    />
                    <Button
                        format="FILLED_ACCENTED"
                        label="CORRER ()"
                        onPress={() => handleAddAction('RUN')}
                    />
                </S.Actions>
                <S.ActionHandle>
                    <S.ActionHandleList>
                        {actionList.map((item, index) => (
                            <S.ActionHandleItem key={index}>
                                <Button
                                    format="NONE_PRIMARY"
                                    label={`${index + 1}. ${translate[item]}`}
                                    iconLeftName="CLOSE"
                                    onPress={() => handleRemove(index)}
                                />
                            </S.ActionHandleItem>
                        ))}
                    </S.ActionHandleList>
                </S.ActionHandle>
                <S.MainActions>
                    <Button
                        format="OUTLINE_ACCENTED"
                        label="EXECUTAR"
                        onPress={handleExecute}
                    />
                    <Button
                        format="FILLED_ACCENTED"
                        label="Limpar ações"
                        onPress={handleClear}
                    />
                    <Button
                        format="FILLED_ACCENTED"
                        label="Resetar"
                        onPress={handleReset}
                    />
                </S.MainActions>
            </S.ActionBox>
        </S.Container>
    );
};

export default Dog;
