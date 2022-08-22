import React, { ReactNode } from 'react'
import style from './content.css'


interface IContentProps {
    children?: ReactNode
}
export function Content({ children }: IContentProps) {
    return (
        <main className={style.content}>
            {children}
        </main>
    )
}
