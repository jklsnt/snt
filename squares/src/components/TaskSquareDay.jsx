import React from 'react';
import TaskSquare from './TaskSquare'

export default function TaskSquareDay(props) {
    return <div className="flex w-5/6 py-12 m-auto my-16 bg-gray-800 rounded-2xl">
	       <TaskSquare textstuff="urbad" textstuff2={2}></TaskSquare>
	   </div>
}
    
