import React, { SetStateAction, ChangeEvent } from 'react'
import style from './commentinput.css'
import { useEffect, FormEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { InputActions } from '../InputActions'; 
import { Rootstate } from '../../../store/store';
import { updateComment } from '../../../store/actions/commentAction';

interface ICommentInput<T> {
    inputRef?: React.RefObject<T>
    setInputRef?: React.Dispatch<React.SetStateAction<React.RefObject<T>>>
    context: React.Context<{
        value: string
        setValue: React.Dispatch<SetStateAction<string>>
    }>
}

export function CommentInputControlled({ inputRef, setInputRef }: ICommentInput<HTMLTextAreaElement>) {
    const value = useSelector((state: Rootstate) => state.comment.commentText)
    
    const dispatch = useDispatch()

    useEffect(() => {
        if (setInputRef && inputRef) {
            setInputRef(inputRef)
        }
    }, [])


    function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(e.target.value))
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <form className={style.form} onSubmit={onSubmit}>           
            <textarea ref={inputRef} className={style.text} name='text' value={value} onChange={onChange} />

            <div className={style.controls}>

                <InputActions />

                <button type='submit' className={`btn ${style.submit}`}>
                    Add comment
                </button>
            </div>

        </form>
    )
}
