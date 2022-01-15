import React from 'react';
import SquareBatch from './SquareBatch.jsx';
import { DateTime } from 'luxon';

import { zip } from '../util';

export default function SquaresDisplay(props) {
    console.assert(props.squares_data.counts.length > 0);

    //const maxima = props.squares_data.maxima;

    const ROW_WIDTH = 7;

    // spaghet ahead: bunching iterators
    let modified_seq = Array(ROW_WIDTH-1- new Date().getDay())
        .fill(props.squares_data.counts[0].map(_ => 0))
        .concat(props.squares_data.counts);
    let maxima_modif = Array(ROW_WIDTH-1- new Date().getDay())
        .fill(props.squares_data.maxima[0].map(_ => 0))
        .concat(props.squares_data.maxima);

    const squares_data = [];
    const maximas_data = [];
    let idx = 0;
    while (idx < modified_seq.length) {
        let arr_squares = [];
        let arr_maximas = [];
        for (let i=0; i<ROW_WIDTH; i++) {
            if (idx + i < modified_seq.length) {
                arr_squares.push(modified_seq[idx + i]);
                arr_maximas.push(maxima_modif[idx + i]);
            }
        }
        squares_data.push(arr_squares);
        maximas_data.push(arr_maximas);
        idx += ROW_WIDTH;
    }
    return <div className="flex flex-wrap inline-block p-4 m-auto rounded-lg w-shrink space-around bg-grey-700 space-y-2">
        {zip(squares_data, maximas_data).map(([count1, maxim1], i) => <SquareBatch
            counts={count1}
            start_day={i*ROW_WIDTH}
            maxima={maxim1}
            label={DateTime.now().minus({weeks: i, days: -1}).startOf('week').minus({days: 1}).toFormat('MMM dd')} key={i}
        />)}
        </div>
}

