import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Rootstate, store } from '../store/store';
import { fetchAsyncMyUserData } from '../store/actions/myUserDataAction';

export function useUserData() {

    const token = useSelector((state: Rootstate) => state.token.value)
    const userData = useSelector((state: Rootstate) => state.myUserData.data)
    const isLoading = useSelector((state: Rootstate) => state.myUserData.isLoading)

    useEffect(() => {

        if (!token) return
        store.dispatch(fetchAsyncMyUserData())

    }, [token])

    return {
        userData,
        isLoading
    }
}
