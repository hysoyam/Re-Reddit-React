import React from 'react'
import style from './divider.css'

export function Divider({ className, isHorizontal, thickness }: { thickness?: number, className?: string, isHorizontal?: boolean }) {

    const classname = `${isHorizontal ? style.deviderHorizontal : style.divider} ${className !== undefined ? className : ''}`

    return (
        <div className={classname}>

        </div>
    )
}
