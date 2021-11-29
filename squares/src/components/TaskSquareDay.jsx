import React from 'react';
import TaskSquare from './TaskSquare'

export default function TaskSquareDay(props) {
    const buttons = [
        {'name': "Brush Teeth", "current": 1, "needed": 2, 'colors': [37, 99, 235]},
        {'name': "Burrie Body", "current": 0, "needed": 1, 'colors': [218, 72, 5]},
        {'name': "Meditate", "current": 1, "needed": 1, 'colors': [134, 35, 171]},
    ]
    console.log('hrrrrrrrrrrrrrrrrrrrrrrrrr')
    return <div className="flex w-5/6 py-0 px-0 m-auto bg-gray-800 rounded-2xl flex-wrap items-baseline" style={{marginTop: -20+"px", maxWidth: 507+'px'}}>
        {
            buttons.map((attrs, i) => {
                return <TaskSquare textstuff={attrs['name']} textstuff2={attrs['current']} textstuff3={attrs['needed']} colors={attrs['colors']} key={i} />
            })
        }
	   </div>
}
    
