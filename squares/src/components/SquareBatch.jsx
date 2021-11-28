import React from 'react';
import Square from './Square.jsx';

export default function SquareBatch(props) {
    return <div className="border-2 border-blue flex space-around h-12 flex-grow">
            {props.squares.map(d => <Square data={d}></Square>)}
        </div>
}
