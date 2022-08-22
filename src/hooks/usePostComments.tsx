// GET [/r/subreddit]/comments/article
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export type IComments = Array<{ data: IComment, kind: string }>

export interface IComment {

    author: string
    ups: number
    id: string
    name: string
    depth: number
    created: number
    created_utc: number
    score: number
    body: string
    body_html: string

    replies: {
        data: {
            children: [{
                data: IComment
                kind: string
            }],
        }
    }
    // likes: number
    // author_flair_type: string
    // author_fullname: string
    // body: string
    // body_html: string
    // downs: number
    // link_id: string
    // parent_id: string
    // permalink: string
    // removal_reason: null
    // subreddit: string
    // subreddit_id: string
    // subreddit_name_prefixed: string
}

export function usePostComments(article: string, subreddit: string = '',) {

    const [comments, setComments] = useState<IComments | null>(null)

    useEffect(() => {
        axios.get(`https://www.reddit.com/r/${subreddit}/comments/${article}.json`, {
            params: {
                raw_json: 1,
                // limit: 10,
                // depth: 3
            }
        }).then(res => {
            setComments(res.data[1].data.children)
        })
            .catch(console.error)

    }, [])

    return [comments]
}