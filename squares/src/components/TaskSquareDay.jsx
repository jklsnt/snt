import React from 'react';
import TaskSquare from './TaskSquare'

export default function TaskSquareDay(props) {
    return <div className="flex w-5/6 py-5 m-auto bg-gray-800 rounded-2xl" style={{marginTop: -20+"px"}}>
	       <TaskSquare textstuff="urbad" textstuff2={2}></TaskSquare>
	   </div>
}
    
