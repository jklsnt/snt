import React from 'react';
import Square from './Square.jsx';

import { zip } from '../util';

export default function SquareBatch({ label, counts, maxima, start_day }) {
    return <div className="flex flex-row-reverse justify-center flex-grow w-full h-12">
        {zip(counts, maxima).map(([counts1, maxima1], i) => <Square
            key={i}
            counts1={counts1}
            day_id={start_day + i}
            maxima={maxima1}
        ></Square>)}
        {label ? <span className="inline-block h-10 p-3 font-mono text-right text-gray-600 align-middle justify-right align-center">{label}</span> : <></>}
    </div>
}
