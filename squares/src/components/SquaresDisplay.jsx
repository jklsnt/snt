import React from 'react';
import SquareBatch from './SquareBatch.jsx';

export default function SquaresDisplay(props) {
    console.log(props.squares_data)
    return <div className="flex flex-wrap w-shrink inline-block m-auto rounded-lg border space-around p-4 border-black bg-grey-700 space-y-2">
    {props.label ? <div>hew</div> : <></>}
        {props.squares_data.map((row, i) => <SquareBatch data={row} scalar={props.squares_data.flat().reduce((a, c) => Math.max(a, c), -Infinity)} id={i}></SquareBatch>)}
        </div>
}

