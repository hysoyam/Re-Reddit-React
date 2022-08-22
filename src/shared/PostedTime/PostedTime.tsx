import React from 'react'
import style from './postedtime.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export function PostedTime({ time }: { time: number }) {

    return (
        <div className={style.postedtime}>
            <span className={style.createdAt}><span className={style.publishedLabel}>Published </span>{timeAgo.format(time * 1000)}</span>
        </div>
    )
}
