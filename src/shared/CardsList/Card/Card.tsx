import React from 'react'
import style from './card.css'
import { CardControls } from './CardControls/CardControls'
import { Article } from './Article/Article'
import { useCardData } from '../../../hooks/useCardData'
import { useState } from 'react';
import { IPostData } from '../../../hooks/usePostsData'
import { commentInputContext } from './../../../context/commentInputContext';

export function Card({ postData }: { postData: IPostData }) {

    const [cardData] = useCardData(postData.id)
    const [commentInputState, setCommentInputState] = useState('')

    return (
        cardData && (
            <commentInputContext.Provider value={{ value: commentInputState, setValue: setCommentInputState }}>
                <li className={style.card} >
                    < Article cardData={cardData} />
                    <CardControls />
                </li>
            </commentInputContext.Provider >))
}
