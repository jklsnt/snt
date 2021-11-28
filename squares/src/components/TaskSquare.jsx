import React from 'react';

export default function TaskSquare(props) {
    return <div className="m-5 rounded-lg text-center text-gray-300" style={{minWidth: 8+"rem",
											 minHeight: 7.3+"rem",
											 backgroundColor: "rgba(" + props.colors[0] + ","+props.colors[1]+"," + props.colors[2] + props.colors[3] + ")"}}>
	       <div className="mt-1">{props.textstuff}</div>
	       <div className="font-mono mt-2 text-4xl">{props.textstuff2+'/'+props.textstuff3}</div>
	   </div>
}

