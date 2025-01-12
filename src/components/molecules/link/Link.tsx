import { type ReactElement } from 'react';

import * as S from './styles';

import { ILinkProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { targetMapper } from './mappers';

const AtomExample = ({
    navigate,
    onClick,
    target = 'BLANCK',
    isDisableDecoretor = false,
    ...rest
}: ILinkProps): ReactElement => {
    return (
        <S.LinkComponent
            href={navigate}
            onClick={onClick}
            target={targetMapper[target]}
        >
            <Text
                color="BASE"
                {...rest}
                format={isDisableDecoretor ? 'BUTTON' : 'LINK'}
            />
        </S.LinkComponent>
    );
};

export default AtomExample;
