
import React from 'react'
import style from './article.css'
import { Author } from '../../../Author';
import { PostedTime } from '../../../PostedTime';
import { ICardData } from '../../../../hooks/usePostsData';
import { Link } from 'react-router-dom';

interface IArticle {
    cardData: ICardData
}

export function Article({ cardData }: IArticle) {

    const { postData, authorData } = cardData

    return postData && authorData ? (
        <Link to={`${postData.id}`} className={style.article}>
            <div className={style.textContent} >
                <div className={style.metaData} >
                    <Author image={authorData.icon_img} name={postData.author} />
                    <PostedTime time={postData.created_utc} />
                </div>
                <h2 className={style.title} >{postData?.title}</h2>
            </div>

            {/* If no image */}
            {postData.preview &&
                <div className={style.preview}>
                    <img
                        className={style.previewImg}
                        src={postData.preview.images[0].source.url}
                    />
                </div>}
        </Link>
    ) : null
}
