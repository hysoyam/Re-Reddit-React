import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import style from './modal.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Imodal {
    children?: React.ReactElement
}
export function Modal({ children }: Imodal) {

    let navigate = useNavigate();
    const node = document.querySelector('#modal_root')
    const modalRef = useRef<HTMLDivElement>(null)

    function closeModal(e: MouseEvent) {
        if (e.target instanceof Node && !modalRef.current?.contains(e.target)) {
            navigate('/posts')
        }
    }

    useEffect(() => {

        document.addEventListener('click', closeModal)
        return () => {
            document.removeEventListener('click', closeModal)
        }
    }, [])

    if (!node) return null
    return ReactDOM.createPortal(
        <div className={style.modal} >
            <div className={style.modalContainer} ref={modalRef}>
                {children}
            </div>
        </div>,
        node
    )
}
