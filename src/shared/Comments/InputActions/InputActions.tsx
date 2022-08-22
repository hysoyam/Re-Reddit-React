import React from 'react'
import style from './inputactions.css'
import uniqid from 'uniqid';
import { Icon } from '../../utils/react/Icon';
import { IIconTypes } from '../../utils/Icons';
import { Button } from '../../utils/ui/Button';



const buttons = [
    { name: IIconTypes.html },
    { name: IIconTypes.image },
    { name: IIconTypes.file },
    { name: IIconTypes.download },
    { name: IIconTypes.user },
    { name: IIconTypes.refresh },
    { name: IIconTypes.link },
    { name: IIconTypes.voice },
    { name: IIconTypes.chat },
    { name: IIconTypes.edit },
    { name: IIconTypes.align },
    { name: IIconTypes.pdf },
]



export function InputActions() {

    const actions = buttons.map((button) =>
        <Button key={uniqid()}>
            <Icon  name={button.name} />
        </Button>
    )

    return (
        <div className={style.actions}>
            {actions}
        </div>
    )
}
