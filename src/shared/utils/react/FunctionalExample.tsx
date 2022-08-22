import React from 'react';
import { pickFromSynthethicEvant } from './pickFromSynthethicEvant';
import { preventAll } from './preventAll';

const withIdKey = withKey('id')
const withIndexKey = withKey()

interface IBlockProps {
    title: string
    id: string
}
function Feed(props: { blocks: IBlockProps[] }) {
    return (
        <div>
            {props.blocks.map(withIdKey(Block))}
        </div>)

}

function Block(props: IBlockProps) {
    return (
        <div>{props.title}</div>
    )
}


function withKey(key?: string) {
    return <E, T extends React.ComponentType<E>>(component: T) =>
        (props: E, index: number) =>
            React.createElement(

                component,
                // { ...props, key: (key ? props[key as keyof E] : index) as React.Key },
                { ...props, key: (key ? props[key as keyof E] : index) as React.Key },
                [],
            );
}

function Input({ onChange, value }: { onChange: (value: string) => void, value: string }) {
    return (
        <input value={value} onChange={getValue(onChange)} />
    )
}

function Checkbox({ onChange, value }: { onChange: (value: boolean) => void, value: boolean }) {
    return (
        <input type="checkbox" checked={value} onChange={getChecked(onChange)} />
    )
}

export const getValue = pickFromSynthethicEvant<HTMLInputElement>()('value')
export const getChecked = pickFromSynthethicEvant<HTMLInputElement>()('checked')

function NotStandartLink(props: any) {

    return (
        <a onClick={preventAll(props.onClick)}> Hello</a>
    )
}

interface InpurProps {
    value: string
    onChange: (value: string) => void
}

function Input2({ onChange, value }: InpurProps) {
    return (
        <input value={value} onChange={preventAll(getValue(onChange))} />
    )
}


