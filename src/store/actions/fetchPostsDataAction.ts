import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

interface IFetchPosts { posts: IPostData[], after: string }

export const fetchBestPosts = createAsyncThunk<IFetchPosts, string>('fetchBest',

    async (after = '') => {
        const responce = await axios.get(
            'https://www.reddit.com/best.json', {
            params: {
                raw_json: 1,
                limit: 11,
                after: after
            }
        })
        const data = {
            posts: responce.data.data.children.map((el: { data: {} }) => el.data),
            after: responce.data.data.after
        }

        return data
    }
)

interface IPostData {
    id: string,
    author: string,
    created_utc: number,
    num_comments: number,
    permalink: string,
    thumbnail: string,
    title: string,
    ups: number,
    url: string,
    url_overridden_by_dest: string,
    author_fullname: string,
    preview?: { images: Array<{ source: { url: string } }> }
    subreddit: string
}

interface IinitialState {
    posts: IPostData[]
    isLoading: boolean
    error: string
    after: string
}

const initialState: IinitialState = {
    posts: [],
    isLoading: false,
    error: '',
    after: ''
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchBestPosts.pending.type]: (state) => {
            state.isLoading = true
            state.error = ''
        },
        [fetchBestPosts.fulfilled.type]: (state, action: PayloadAction<IFetchPosts>) => {
            state.posts = state.posts.concat(action.payload.posts)
            state.error = ''
            state.isLoading = false
            state.after = action.payload.after
        },
        [fetchBestPosts.rejected.type]: (state, action) => {
            state.error = action.error.message
            state.isLoading = false
        }
    }
})