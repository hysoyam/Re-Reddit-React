import React from 'react';

export type IcommentValue = {
    value: string,
}

interface IcommentInputContext {
    value?: string

    setValue?: (value: string) => void

}

export const commentInputContext = React.createContext<IcommentInputContext>({})

