import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ThunkAction } from 'redux-thunk';
import { Rootstate } from "../store";
import { Action } from 'redux';
import axios from 'axios';

interface IUserData {
    name?: string
    iconUrl?: string
}

export interface IMyUserData {
    isLoading: boolean
    data: IUserData
    error: Error | ''
}
const initialState: IMyUserData = {
    isLoading: false,
    data: {},
    error: ''
}

export const myUserDataSlice = createSlice({
    name: 'myUserData',
    initialState: initialState,
    reducers: {

        setMyUserData: (state, action: PayloadAction<IUserData>) => {
            state.isLoading = false
            state.data = action.payload
        },
        fetchMyUserData: (state, action: PayloadAction) => {
            state.isLoading = true
            state.error = ''
        },
        errorMyUserData: (state, action: PayloadAction<Error>) => {
            state.isLoading = false
            state.error = action.payload
        },

    }
})

export const { errorMyUserData, fetchMyUserData, setMyUserData } = myUserDataSlice.actions

export const fetchAsyncMyUserData = (): ThunkAction<void, Rootstate, unknown, Action<string>> => (dispatch, getState) => {

    dispatch(fetchMyUserData())
    axios.get(
        'https://oauth.reddit.com/api/v1/me.json?raw_json=1',
        {
            headers: { Authorization: `bearer ${getState().token.value}` }
        },
    )
        .then((res) => {
            dispatch(setMyUserData({ name: res.data.name, iconUrl: res.data.icon_img }))
        })
        .catch((error) => {
            dispatch(errorMyUserData(error))
            console.error(error)
        })

}
