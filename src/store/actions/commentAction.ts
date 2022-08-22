import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialValue = {
    commentText: 'test state'
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState: initialValue,
    reducers: {
        updateComment: (state, action: PayloadAction<string>) => {
            state.commentText = action.payload
        }
    }
})

export const { updateComment } = commentSlice.actions
