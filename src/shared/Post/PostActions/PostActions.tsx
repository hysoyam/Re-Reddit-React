import React from 'react'
import { IIconTypes } from '../../utils/Icons'
import { Icon } from '../../utils/react/Icon'
import { Button } from '../../utils/ui/Button'
import style from './postactions.css'

interface IPostActions {
    comments: number
}

export function PostActions({ comments }: IPostActions) {
    return (
        <div className={style.postactions}>
            <Button><> <Icon name={IIconTypes.comments} /> {comments} comments</></Button>
            <Button><> <Icon name={IIconTypes.share} />Share</></Button>
            <Button><> <Icon name={IIconTypes.hide} />Hide</></Button>
            <Button><> <Icon name={IIconTypes.save} />Save</></Button>
            <Button><> <Icon name={IIconTypes.complain} />Report</></Button>
        </div>
    )
}
