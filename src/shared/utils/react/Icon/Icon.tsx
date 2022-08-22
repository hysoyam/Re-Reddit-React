import React from 'react'
import { IIconNames, IIconTypes, IconsSvg } from '../../Icons'



export function Icon({ name, size }: { name: IIconTypes, size?: number }): React.ReactElement {

    // const IconSvg = IconsSvg[`${name}`]
    const IconSvg = IconsSvg[name]

    const divStyle = {
        width: size,
        height: size,
    };


    return (
        < IconSvg />
    )
}
