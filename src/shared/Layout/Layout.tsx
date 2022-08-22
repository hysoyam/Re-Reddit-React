import React, { useEffect } from "react";
import { fetchToken } from "../../store/actions/tokenAction";
import { Rootstate, store } from "../../store/store";

import styles from './Layout.css'
import { useSelector } from 'react-redux';
import Cookies from "js-cookie";

interface ILayoutProps {
    children?: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {

    const token = useSelector((state: Rootstate) => state.token.value)

    const secret = Cookies.get('secret')
    const clientId = Cookies.get('clientId')
    const code = Cookies.get('code')

    useEffect(() => {
        if (!token && (secret && clientId && code)) {
            store.dispatch(fetchToken({ secret, clientId, code }))
        }
    }, [])

    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}