import React from 'react'
import { UserBlock } from './UserBlock/UserBlock'
import style from './searchblock.css'
import { useUserData } from '../../../hooks/useUserData';

export function Searchblock() {

    // useToken()
    const { userData, isLoading } = useUserData()

    return (
        <div className={style.searchBlock}>
            <UserBlock avatarSrc={userData.iconUrl} username={userData.name} loading={isLoading} />
        </div>
    )
}
