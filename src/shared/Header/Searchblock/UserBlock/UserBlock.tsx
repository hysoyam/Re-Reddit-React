import React from 'react'
import { config } from '../../../../../config'
import { IIconTypes } from '../../../utils/Icons'
import { Icon } from '../../../utils/react/Icon'
import style from './UserBlock.css'


interface UserProps {
    avatarSrc?: string
    username?: string
    loading?: boolean
}

export function UserBlock({ avatarSrc, username = 'Sign In', loading = false }: UserProps) {

    const CLIENT_ID = config.CLIENT_ID
    const TYPE = 'code'
    const STATE = 'test'
    const URI = `${config.URI_MAIN}/auth`
    const DURATION = 'permanent'
    const SCOPE_STRING = 'identity edit read report save submit subscribe'

    const href = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${STATE}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`

    return (
        <a href={href} className={style.userBox}>
            <div className={style.avatarBox}>
                {
                    avatarSrc
                        ? <img className={style.avatarImage} src={avatarSrc} alt="User-avatar" />
                        : <Icon name={IIconTypes.userThumbnail} />
                }
            </div>
            <div className={style.username}>
                {loading ? 'Loading...' :  username }
            </div>
        </a>
    )
}
