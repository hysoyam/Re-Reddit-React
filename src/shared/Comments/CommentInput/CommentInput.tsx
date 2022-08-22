import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { InputActions } from '../InputActions'
import style from './commentinput.css'
import * as Yup from 'yup';
import { store } from '../../../store/store';
import { updateComment } from '../../../store/actions/commentAction';

export function CommentInput({ initialText = '' }) {

    return (
        <Formik
            initialValues={{ commentText: initialText }}
            validationSchema={Yup.object({
                commentText: Yup.string()
                    .min(5, 'At least 5 letters')
                    .max(25, 'Maximum 25 letters')
                    .required('Required')
            })}
            
            onSubmit={(value) => {
                store.dispatch(updateComment(value.commentText))
            }}
        >
            {({ errors, touched }) => (
                <Form className={style.form}>

                    <Field
                        name="commentText"
                        type="text"
                        as="textarea"
                        className={style.text}
                        placeholder='Write a comment'
                        aria-invalid={(errors.commentText && touched.commentText)}
                    />
                    {(errors.commentText && touched.commentText) ? <div className={style.inputError}>{errors.commentText}</div> : null}

                    <div className={style.controls}>
                        <InputActions />
                        <button disabled={!!(errors.commentText && touched.commentText)} type='submit' className={`btn ${style.submit}`}>Add comment</button>
                    </div>
                </Form>
            )}
        </Formik >

    )
}
