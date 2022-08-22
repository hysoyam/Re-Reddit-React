import React from 'react'
import style from './cardcontrols.css'

import { Actions } from './Actions/Actions';
import { SpecialActions } from './SpecialActions/SpecialActions';
import { VoteControls } from './VoteControls/VoteControls';
import { MenuButton } from './MenuButton/MenuButton';


export function CardControls() {
 
    return (

        <div className={style.controls}  >
            <MenuButton  />
            <VoteControls />
            <SpecialActions />
            <Actions />
        </div>
    )
}
