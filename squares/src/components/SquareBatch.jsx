import React from 'react';
import Square from './Square.jsx';

export default function SquareBatch(props) {
    return <div className="flex justify-center flex-grow w-full h-12 flex-row-reverse">
        {props.data.map((d, i) => <Square scalar={props.scalar} key={i} data={d}></Square>)}
        {props.label ? <div className="justify-right align-center text-right p-3 font-mono align-middle h-10 w-24">{props.label}</div> : <></>}
    </div>
}
