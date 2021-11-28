import React from 'react';
import TaskSquare from './TaskSquare'

export default function TaskSquareDay(props) {
    return <div className="flex w-5/6 py-0 px-0 m-auto bg-gray-800 rounded-2xl flex-wrap items-center" style={{marginTop: -20+"px"}}>
	       
	       <TaskSquare textstuff="Brush Teeth" textstuff2={2} textstuff3={3}></TaskSquare>
	       <TaskSquare textstuff="Brush Teeth" textstuff2={2} textstuff3={3}></TaskSquare>
	       <TaskSquare textstuff="Brush Teeth" textstuff2={2} textstuff3={3}></TaskSquare>
	   </div>
}
    
