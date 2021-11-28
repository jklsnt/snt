import React from 'react';

export default function TaskSquare(props) {
    return <div className="m-5 rounded-lg bg-blue-600 text-center text-gray-300" style={{minWidth: 8+"rem", minHeight: 7.3+"rem"}}>
	       <div className="mt-1">{props.textstuff}</div>
	       <div className="font-mono mt-2 text-4xl">{props.textstuff2+'/'+props.textstuff3}</div>
	   </div>
}

