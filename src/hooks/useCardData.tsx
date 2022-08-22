import axios from 'axios';
import { useEffect, useState } from 'react';
import { IAuthorData, ICardData, IPostData } from './usePostsData';
import { useSelector } from 'react-redux';
import { Rootstate } from '../store/store';

export function useCardData(id: string) {

    const post = useSelector((state: Rootstate) => state.posts.posts).find((post) => { if (post.id == id) return post })
    const [cardData, setCardData] = useState<ICardData | null>(null)
    const [postData, setPostData] = useState<IPostData | null>(null)
    const [userData, setUserData] = useState<IAuthorData | null>(null)
    const [errorMessage, setErrorMessage] = useState<Error | null>(null)

    useEffect(() => {
        // at first check if that article exist in existing POSTS
        if (post) {
            setPostData(post)
        } else {
            axios.get(`https://www.reddit.com/by_id/t3_${id}.json`)
                .then((res) => {
                    const data = res.data.data.children[0].data
                    setPostData(data)
                })
                .catch(error => {
                    setErrorMessage(error)
                })
        }
    }, [])

    useEffect(() => {
        if (postData) {

            axios.get(
                `https://www.reddit.com/user/${postData.author}/about.json?raw_json=1`

            ).then((res) => {
                setUserData(res.data.data)
            })
                .catch(error => {
                    setErrorMessage(error)
                })
        }
    }, [postData])

    useEffect(() => {

        if (errorMessage) {
            setCardData({
                error: errorMessage
            })
        }

        if (postData && userData) {
            setCardData({
                postData: postData ? postData : undefined,
                authorData: userData ? userData : undefined,
            })
        }

    }, [userData, postData, errorMessage])

    return [cardData]
}