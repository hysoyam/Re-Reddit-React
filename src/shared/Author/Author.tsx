import React from 'react'
import style from './author.css'

interface iAuthor {
    name: string;
    image?: string;
    onClick?: () => void
}
export function Author({ image, name,  onClick }: iAuthor) {
    return (
        <div className={style.author}>
            <div className={style.userLink} >
                {image && <img
                    className={style.avatar}
                    src={image}
                    alt={name}
                />}

                <p className={style.username} onClick={onClick}>{name} </p>
            </div>
        </div>
    )
}
