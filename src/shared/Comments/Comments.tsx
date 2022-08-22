import React from 'react'
import { usePostComments } from '../../hooks/usePostComments'
import style from './comments.css'
import { Comment } from './Comment';
import { CommentInput } from './CommentInput';
import { useState } from 'react';
import { useEffect } from 'react';

interface IComments {
    arcticle: string,
    subreddit: string,
    depth: number
}
export function Comments({ arcticle, subreddit, depth = 3 }: IComments) {

    const [isLoading, setIsLoading] = useState(true)
    const [commentsNodes, setСommentsNodes] = useState<JSX.Element[]>([])
    const [comments] = usePostComments(arcticle, subreddit)

      useEffect(() => {
        if (comments) {
            setIsLoading(false)
            setСommentsNodes(comments
                .filter(comment => comment.kind !== "more")
                .map(comment => <Comment key={comment.data.id} depth={depth} commentData={comment.data} />
                ))
        }
    }, [comments])

    return (
        isLoading ?
            <>
                'Comments is loading'
            </> :
            (<>
                <CommentInput />

                <ul className={style.comments}>
                    {commentsNodes}
                </ul>
            </>)
    )
}
