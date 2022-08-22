import { configureStore } from "@reduxjs/toolkit"
import { commentSlice } from "./actions/commentAction"
import { postsSlice } from "./actions/fetchPostsDataAction"
import { myUserDataSlice } from "./actions/myUserDataAction"
import { tokenSlice } from "./actions/tokenAction"

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: {
        comment: commentSlice.reducer,
        token: tokenSlice.reducer,
        myUserData: myUserDataSlice.reducer,
        posts: postsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

