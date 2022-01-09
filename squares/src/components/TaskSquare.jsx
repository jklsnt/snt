import React from 'react';

export default function TaskSquare({ name, current, maximum, increment, decrement, colors }) {
    return <button
        onClick={increment}
        onContextMenu={decrement}
        className="m-5 font-bold text-center text-gray-300 rounded-lg"
        style={{
            minWidth: 8+"rem",
			minHeight: 7.3+"rem",
			backgroundColor: "rgba(" + colors[0] + ","+colors[1]+"," + colors[2] + ',' + (0.1 + current / maximum * 0.9) + ")"}}
    >
       <div className="mt-1 font-extrabold">{name}</div>
       <div className="mt-2 font-mono text-4xl">{`${current}/${maximum}`}</div>
   </button>
}

