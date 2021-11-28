import React from 'react';
import SquareBatch from './SquareBatch.jsx';

export default function SquaresDisplay(props) {
    return <div className="border border-red h-full w-full flex space-around">
            <SquareBatch data={props.squares_data}></SquareBatch>
        </div>
}

