import React from 'react';
import TaskSquare from './TaskSquare'

export default function TaskSquareDay(props) {
    return <div className="flex w-5/6 py-0 px-0 m-auto bg-gray-800 rounded-2xl flex-wrap items-baseline" style={{marginTop: -20+"px", maxWidth: 507+'px'}}>
	       
	       <TaskSquare textstuff="Brush Teeth" textstuff2={2} textstuff3={3} colors={[37, 99, 235, 1]}></TaskSquare>
	       <TaskSquare textstuff="Eat Dog" textstuff2={0} textstuff3={1} colors={[220, 72, 5, 1]}></TaskSquare>
	       <TaskSquare textstuff="Burry Bodies" textstuff2={1} textstuff3={1} colors={[20, 20, 20, 1]}></TaskSquare>	       <TaskSquare textstuff="Brush Teeth" textstuff2={2} textstuff3={3} colors={[37, 99, 235, 1]}></TaskSquare>
	       <TaskSquare textstuff="Eat Dog" textstuff2={0} textstuff3={1} colors={[220, 72, 5, 1]}></TaskSquare>

	   </div>
}
    
