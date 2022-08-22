import React from 'react'
import style from './button.css'

interface Ibutton {
    children: React.ReactElement
    className?: string
    action?: () => void
}
export function Button({ children, action, className = '' }: Ibutton) {


    const classNames = style.button + (className && ` ${className}`)
    return (
        <button className={classNames} onClick={action}>
            {children}
        </button>
    )
}
