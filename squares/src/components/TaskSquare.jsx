import React from 'react';

export default function TaskSquare(props) {
    console.log(props.textstuff2, props.textstuff3, 0.1 + props.textstuff2 / props.textstuff3 * 0.9)
    return <button onClick={props.onClick} className="m-5 rounded-lg text-center text-gray-300 font-bold" style={{minWidth: 8+"rem",
											 minHeight: 7.3+"rem",
											 backgroundColor: "rgba(" + props.colors[0] + ","+props.colors[1]+"," + props.colors[2] + ',' + (0.1 + props.textstuff2 / props.textstuff3 * 0.9) + ")"}}>
	       <div className="mt-1 font-extrabold">{props.textstuff}</div>
	       <div className="font-mono mt-2 text-4xl">{props.textstuff2+'/'+props.textstuff3}</div>
	   </button>
}

