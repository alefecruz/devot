import { IColorTheme } from '@/global/theme';
import { ILinkProps } from '@/components/molecules/link';
import { IIconProps } from '@/components/atoms/icon';

export interface INavbarProps {
    optionList?: IOptionNavbar[];
    optionSelectedColor?: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY'
    >;
    optionDontSelectedColor?: keyof Pick<
        IColorTheme,
        'ACCENTED' | 'PRIMARY' | 'SECONDARY' | 'BASE'
    >;
}

interface IOptionNavbar extends Pick<ILinkProps, 'onClick'> {
    name: IIconProps['name'];
}
