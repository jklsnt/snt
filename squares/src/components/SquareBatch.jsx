import React from 'react';
import Square from './Square.jsx';

export default function SquareBatch(props) {
    return <div className="flex justify-center flex-grow w-full h-12 space-x-2">
            {props.data.map((d, i) => <Square scalar={props.scalar} key={i} data={d}></Square>)}
        </div>
}
