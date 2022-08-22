import React, { createContext, createRef, useContext } from 'react'
import { IComment } from '../../../hooks/usePostComments'
import style from './comment.css'
import { Author } from './../../Author';
import { PostedTime } from '../../PostedTime';
import { VoteControls } from './../../CardsList/Card/CardControls/VoteControls/VoteControls';
import { Icon } from '../../utils/react/Icon';
import { IIconTypes } from '../../utils/Icons';
import { CommentInputControlled } from '../CommentInputControlled/CommentInputControlled';
import { useState, useEffect } from 'react';
import { Button } from '../../utils/ui/Button';
import { Divider } from '../../utils/Devider';

export function Comment({ depth, commentData }: { commentData: IComment, depth: number }) {

    const [refInput, setRefInput] = useState(createRef<HTMLTextAreaElement>())

    const [isOpenCommentInput, setIsOpenCommentInput] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const commentContext = createContext({
        value: inputValue,
        setValue: setInputValue
    })

    useEffect(() => {

        if (isOpenCommentInput) {
            setInputValue(`${commentData.author}, `)
            refInput.current?.focus()
        }

    }, [isOpenCommentInput])

    function authorOnClick() {
        setIsOpenCommentInput(!isOpenCommentInput)
    }

    return (
        <div className={style.comment}>
            <div className={style.side_menu}>
                <VoteControls />

                <Divider/> 
            </div>
            <div className={style.content}>
                <div className={style.header}>
                    <Author name={commentData.author} />
                    <PostedTime time={commentData.created_utc} />
                </div>

                <div className={style.body}>
                    {commentData.body}
                </div>

                <div className={style.actions}>
                    <Button action={authorOnClick} className={style.action}>
                        <>
                            <Icon name={IIconTypes.comments} /> Reply
                        </>
                    </Button>
                    <Button className={style.action}>
                        <>
                            <Icon name={IIconTypes.share} /> Share
                        </>
                    </Button>
                    <Button className={style.action}>
                        <>
                            <Icon name={IIconTypes.complain} /> Report
                        </>
                    </Button> 
                </div>

                {isOpenCommentInput &&
                    <div className={style.commentInput} >
                        <CommentInputControlled inputRef={refInput} setInputRef={setRefInput} context={commentContext} />
                    </div>
                }

                {/* additional layers of comments IF DEPTH > 0 */}
                {/* Cannot read properties of undefined (reading 'children') */}
                {commentData.replies.data && commentData.replies.data?.children[0].kind !== "more" && (
                    <div className={style.subcomment}>
                        <Comment commentData={commentData.replies.data.children[0].data} depth={depth - 1} />
                    </div>
                )}
            </div>
        </div>
    )
}