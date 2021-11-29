import React, { useState } from 'react';

export default function TaskSquare(props) {
    const count = props.textstuff2[props.key]
    //const [ count, setCount ] = useState(props.textstuff2);

    return <button onClick={() => {props.updateCount((count + 1) % (props.textstuff3 + 1))}} className="m-5 rounded-lg text-center text-gray-300 font-bold" style={{minWidth: 8+"rem",
											 minHeight: 7.3+"rem",
											 backgroundColor: "rgba(" + props.colors[0] + ","+props.colors[1]+"," + props.colors[2] + ',' + (0.1 + count / props.textstuff3 * 0.9) + ")"}}>
	       <div className="mt-1 font-extrabold">{props.textstuff}</div>
	       <div className="font-mono mt-2 text-4xl">{count+'/'+props.textstuff3}</div>
	   </button>
}

