import React from 'react'
import { config } from '../../../../config'
import style from './threadtitle.css'

export function Threadtitle() {
    return (
        <a href={`${config.URI_MAIN}`}>
            <h1 className={style.threadTitle}>Re:Reddit</h1>
        </a>
    )
}
