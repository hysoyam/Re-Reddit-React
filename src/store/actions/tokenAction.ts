import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { config } from "../../../config"

interface ITokenState {
    value: string,
    isLoading: boolean,
    error: string,
}
const tokenState: ITokenState = {
    value: '',
    isLoading: false,
    error: '',
}

export const fetchToken = createAsyncThunk('fetchToken',

    async ({ secret, clientId, code }: { secret: string, clientId: string, code: string }) => {

        const responce = await axios.post(
            'https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${code}&redirect_uri=${config.URI_MAIN}/auth`,
            {
                auth: { username: clientId, password: secret },
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        )

        return responce.data['access_token']
    }
)

export const tokenSlice = createSlice({
    name: 'token',
    initialState: tokenState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
    extraReducers: {
        [fetchToken.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.value = action.payload
            state.error = ''
            state.isLoading = false
        },
        [fetchToken.pending.type]: (state) => {
            state.value = ''
            state.error = ''
            state.isLoading = true
        },
        [fetchToken.rejected.type]: (state, action) => {
            state.value = ''
            state.error = action.error.message
            state.isLoading = false
        },
    },

})