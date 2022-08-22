import React from 'react'
import style from './menudropdownlist.css'
import { generateId } from '../../../../../utils/react/generateRandomString';
import { GenericList } from '../../../../../utils/react/GenericList';
import { IIconNames, IIconTypes } from '../../../../../utils/Icons';
import { Icon } from '../../../../../utils/react/Icon';

const listItemClasses = style.menuItem + ' ' + style.divider;

interface IMenuItem {
    text: string;
    iconName: IIconTypes;
    id: string;
    As?: 'a' | 'li' | 'button' | 'div';
    className?: string;
    onClick?: (id: string) => void;
    href?: string;
}

interface IMenuItems {
    list: IMenuItem[];
}

export const menuList: IMenuItem[] = [
    {
        text: 'Комментарии',
        As: 'li' as const,
        className: listItemClasses,
        iconName: IIconTypes.comments
    },
    {
        text: 'Поделиться',
        As: 'li' as const,
        className: listItemClasses,
        iconName: IIconTypes.share
    },
    {
        text: 'Скрыть',
        As: 'li' as const,
        className: listItemClasses,
        iconName: IIconTypes.hide
    },
    {
        text: 'Сохранить',
        As: 'li' as const,
        className: listItemClasses,
        iconName: IIconTypes.save
    },
    {
        text: 'Пожаловаться',
        As: 'li' as const,
        className: listItemClasses,
        iconName: IIconTypes.complain
    }
].map(generateId);

export function MenuDropdownList({ list }: IMenuItems): JSX.Element {
    const newList = list.map((item) => ({
        children: <><Icon name={item.iconName} size={25} /> <span>{item.text}</span></>,
        As: item.As,
        id: item.id,
        className: item.className,
    }));

    return (
        <GenericList list={newList} />
    );
}
