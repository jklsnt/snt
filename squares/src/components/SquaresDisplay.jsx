import React from 'react';
import SquareBatch from './SquareBatch.jsx';
import { DateTime } from 'luxon';

export default function SquaresDisplay(props) {
    console.assert(props.squares_data.counts.length > 0);
    //console.log(props)

    const maxima = props.squares_data.maxima;

    const ROW_WIDTH = 7;

    // spaghet ahead: bunching iterators
    let modified_seq = Array(ROW_WIDTH-1- new Date().getDay()).fill(0).concat(props.squares_data.counts);
    const squares_data = [];
    let idx = 0;
    while (idx < modified_seq.length) {
        let arr = [];
        for (let i=0; i<ROW_WIDTH; i++) {
            if (idx + i < modified_seq.length) 
                arr.push(modified_seq[idx + i]);
        }
        squares_data.push(arr)
        idx += ROW_WIDTH;
    }
    return <div className="flex flex-wrap inline-block p-4 m-auto rounded-lg w-shrink space-around bg-grey-700 space-y-2">
        {squares_data.map((row, i) => <SquareBatch
            counts={row}
            start_day={i*ROW_WIDTH}
            maxima={maxima}
            label={DateTime.now().minus({weeks: i}).startOf('week').toFormat('MMM dd')} key={i}
        />)}
        </div>
}

