import { type ReactElement, useState } from 'react';

import { Icon } from '@/components/atoms/icon';

import * as S from './styles';

import { IToggleButtonProps } from './interfaces';

const ToggleButton = ({
    iconLeftName = 'MOON',
    value = false,
    iconRightName = 'SUN',
    onToggle,
}: IToggleButtonProps): ReactElement => {
    const [toggleValue, setToggleValue] = useState(value);
    const handleToggle = () => {
        onToggle && onToggle(toggleValue);
        setToggleValue((curr) => !curr);
    };
    return (
        <S.Container>
            <S.Toggle toggleValue={toggleValue} onClick={handleToggle}>
                {toggleValue ? (
                    <Icon name={iconRightName} size="LARGE" />
                ) : (
                    <Icon name={iconLeftName} size="LARGE" />
                )}
            </S.Toggle>
        </S.Container>
    );
};

export default ToggleButton;
