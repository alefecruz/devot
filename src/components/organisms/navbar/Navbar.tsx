import { type ReactElement, useState } from 'react';

import * as S from './styles';

import { INavbarProps } from './interfaces';
import { Link } from '@/components/molecules/link';
import { Icon } from '@/components/atoms/icon';

const FIRST_OPTION_INDEX = 0;
const WIDTH_UNSELECTED_OPTION = 8;
const WIDTH_SELECTED_OPTION = 12;

const Navbar = ({
    optionList = [],
    optionDontSelectedColor = 'ACCENTED',
    optionSelectedColor = 'SECONDARY',
}: INavbarProps): ReactElement => {
    const [selectedIndex, setSelectedIndex] = useState(FIRST_OPTION_INDEX);

    return (
        <S.NavbarContainer>
            {optionList.map(({ name, onClick }, index) => (
                <S.OptionContent key={index}>
                    <Link format="BODY" color="ACCENTED" isDisableDecoretor>
                        <Icon name={name} size="XLARGE" />
                    </Link>
                </S.OptionContent>
            ))}
        </S.NavbarContainer>
    );
};

export default Navbar;
