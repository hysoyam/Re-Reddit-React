import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import style from './dropdown.css'
import { useState } from 'react';

interface IDropdownProps {
    buttonEl: HTMLElement
    children: React.ReactNode
    onClose: () => void
}

export function Dropdown({ children, buttonEl, onClose }: IDropdownProps) {

    const boungings = buttonEl.getBoundingClientRect()

    const [position, setPosition] = useState(
        {
            offsetFromRight: boungings.x + window.scrollX + (boungings.width / 2),
            offsetFromTop: boungings.bottom + window.scrollY + 20
        })

    const dropdownRef = useRef<HTMLDivElement>(null)

    const node = document.querySelector('#dropdown_root')



    function clickUotside(e: MouseEvent) {

        if (e.target instanceof Node && !dropdownRef.current?.contains(e.target)) {
            onClose()
        }
    }



    useEffect(() => {

        window.addEventListener('resize', () => {
            setPosition({
                offsetFromRight: boungings.x + window.scrollX + (boungings.width / 2),
                offsetFromTop: boungings.bottom + window.scrollY + 20
            })
        })

        document.addEventListener('click', clickUotside)

        return () => {
            document.removeEventListener('click', clickUotside)
        }

    }, [])


    if (!node) return null

    const dropdown =
        <div className={style.container} ref={dropdownRef}>

            {/*  top: position.offsetFromTop, left: position.offsetFromRight */}
            {/*  transform: translate(position.offsetFromRight, position.offsetFromTop) */}
            <div style={{ top: position.offsetFromTop, left: position.offsetFromRight}} className={style.listContainer}>
                <div className={style.list}>
                    {children}
                </div>
            </div>

        </div >



    return ReactDOM.createPortal(dropdown, node)
}





