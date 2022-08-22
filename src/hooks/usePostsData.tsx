import { useEffect, useState } from 'react';
import axios from 'axios';

export interface ICardData {
    postData?: IPostData
    authorData?: IAuthorData
    error?: Error
}

export interface IAuthorData {
    id: string,
    name: string,
    icon_img: string,
}

export interface IPostData {
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

export type IPostsData = Array<IPostData>

export function usePostsData() {

    const [postsData, setPostsData] = useState<IPostsData | null>(null)

    useEffect(() => {
        axios.get(
            'https://www.reddit.com/best.json', {
            params: {
                raw_json: 1,
                limit: 10,
            }
        }
        ).then((res) => {
            setPostsData(res.data.data.children.map((el: { data: {} }) => el.data))
        })
            .catch(console.error)
    }, [])

    return [postsData]
}
