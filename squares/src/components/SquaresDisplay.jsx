import React from 'react';
import SquareBatch from './SquareBatch.jsx';

export default function SquaresDisplay(props) {
    console.assert(props.squares_data.length > 0);
    console.log(new Date().getDay())
    console.log(props.squares_data)

    // spaghet ahead: bunching iterators
    let modified_seq = Array(7- new Date().getDay()).fill(0).concat(props.squares_data);
    const squares_data = [];
    let idx = 0;
    while (idx < modified_seq.length) {
        let arr = [];
        for (let i=0; i<7; i++) {
            if (idx + i < modified_seq.length) 
                arr.push(modified_seq[idx + i]);
        }
        squares_data.push(arr)
        idx += 7;
    }
    console.log(squares_data)
    return <div className="flex flex-wrap w-shrink inline-block m-auto rounded-lg border space-around p-4 border-black bg-grey-700 space-y-2">
        {squares_data.map((row, i) => <SquareBatch data={row} scalar={props.squares_data.reduce((a, c) => Math.max(a, c), -Infinity)} label={"hew"} key={i}></SquareBatch>)}
        </div>
}

