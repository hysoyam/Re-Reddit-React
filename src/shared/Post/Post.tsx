import React from 'react'
import style from './post.css'
import { Author } from '../Author'
import { VoteControls } from '../CardsList/Card/CardControls/VoteControls'
import { PostedTime } from '../PostedTime'
import { IAuthorData, IPostData } from '../../hooks/usePostsData'
import { Divider } from '../utils/Devider'
import { PostActions } from './PostActions'
import { useParams } from 'react-router-dom'
import { useCardData } from '../../hooks/useCardData'
import { useState } from 'react';
import { useEffect } from 'react';
import { Comments } from '../Comments'

export function Post() {

    const postID = useParams().postId as string
    const [cardData] = useCardData(postID)
    const [postData, setpostData] = useState<IPostData | undefined>(undefined)
    const [authorData, setauthorData] = useState<IAuthorData | undefined>(undefined)
    const [cardError, setCardError] = useState<Error | undefined>(undefined)

    useEffect(() => {

        if (cardData?.error) {
            setCardError(cardData.error)
        }
        if (cardData) {
            setpostData(cardData.postData)
            setauthorData(cardData.authorData)
        }
    }, [cardData])

    if (!cardError && postData && authorData) {
        return (
            <div key={postData.id} className={style.post}>
                <div className={style.header_container}>
                    <VoteControls ups={postData.ups} />
                    <div className={style.header}>
                        <h2 className={style.header_title} >{postData.title}</h2>
                        <div className={style.header_info}>

                            <Author image={authorData.icon_img} name={postData.author} />
                            <PostedTime time={postData.created_utc} />
                        </div>
                    </div>
                </div>
                <div className={style.postBody}>

                    {postData.preview &&
                        <div className={style.preview}>
                            <img className={style.img} src={postData.preview.images[0].source.url} />
                            <p>
                                {/* теkст */}
                            </p>
                        </div>
                    }
                    <Divider className={style.divider} isHorizontal={true} />
                    <PostActions comments={postData.num_comments} />

                </div>
                <Comments arcticle={postData.id} subreddit={postData.subreddit} depth={0} />
            </div>
        )
    }
    return cardError ? <div>This post does not exist</div> : null
}