import React, { useRef } from 'react'
import { Dropdown } from '../../../../Dropdown'
import { CloseButton } from './CloseButton'
import style from './menubutton.css'

import { MenuDropdownList, menuList } from './MenuDropdownList/MenuDropdownList'
import { useState } from 'react';

export function MenuButton() {

    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    const buttonRef = useRef<HTMLDivElement>(null)

    function closeDropdown() {
        setIsTooltipOpen(false)
    }
    return (
        <div className={style.container} ref={buttonRef}>

            {/* <Button /> */}

            {/* dropdown root */}

            {/* Смысл портала в том чтобы выводить данные вне компонента
            Ну в случае с дропдауном обычно создаётся какой-то блок в боди, и в него выводится содержимое дропдауна
            И позиционируется абсолютом к кнопке
            Для этого высчитываются координаты кнопки */}

            <button className={style.menuButton} onClick={() => { setIsTooltipOpen(!isTooltipOpen) }} >
                <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                    <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
                    <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
                </svg>
            </button>
            {/* {isTooltipOpen && 'test'} */}
            {isTooltipOpen && buttonRef.current && (

                <Dropdown
                    buttonEl={buttonRef.current}
                    onClose={closeDropdown}
                >
                    <ul>
                        <MenuDropdownList list={menuList} />
                        <CloseButton action={closeDropdown} />
                    </ul>
                </Dropdown>)
            }

        </div>
    )
}



