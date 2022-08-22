
import React from "react";

interface IItem {
    id: string
    children: string | React.ReactNode 
    onClick?: (id: string) => void
    className?: string
    As?: 'a' | 'li' | 'button' | 'div'
    href?: string
}

  interface IGenericListProps {
    list: IItem[]
}

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({ As = 'div', children, onClick = () => { }, className, id, href }) => (

                <As
                    className={className}
                    href={href}
                    key={id}
                    onClick={() => onClick}
                >
                    {children}
                </As>
            ))}
        </>
    )
}