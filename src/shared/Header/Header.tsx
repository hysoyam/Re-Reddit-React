import React from 'react'
import style from "./header.css";
import { Searchblock } from './Searchblock/Searchblock';
import { Threadtitle } from './Threadtitle/Threadtitle';

export function Header() {


    return (

        <header className={style.header}>
            <Searchblock />
            <Threadtitle />
        </header >
    )
}

