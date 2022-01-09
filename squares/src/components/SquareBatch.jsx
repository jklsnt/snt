import React from 'react';
import Square from './Square.jsx';

export default function SquareBatch({ label, counts, maxima, start_day }) {
    return <div className="flex flex-row-reverse justify-center flex-grow w-full h-12">
        {counts.map((counts, i) => <Square
            key={i}
            counts1={counts}
            day_id={start_day + i}
            maxima={maxima}
        ></Square>)}
        {label ? <span className="inline-block h-10 p-3 font-mono text-right text-gray-600 align-middle justify-right align-center">{label}</span> : <></>}
    </div>
}
