import React from 'react'
import style from './closebutton.css'

export function CloseButton({ action }: { action: () => void }) {
    return (
        <button className={style.closebutton} onClick={action}>
            Закрыть
        </button>
    )
}
