import React from 'react';
import TaskSquare from './TaskSquare'

import { zip } from '../util';

export default function TaskSquareDay({ counts1, maxima, dispatch }) {
    const buttons = [
        {'name': "Brush Teeth", 'colors': [37, 99, 235]},
        {'name': "Burrie Body", 'colors': [218, 72, 5]},
        {'name': "Meditate",    'colors': [134, 35, 171]},
    ]
    return <div className="flex flex-wrap items-baseline w-5/6 px-0 py-0 m-auto bg-gray-800 rounded-2xl" style={{marginTop: -20+"px", maxWidth: 507+'px'}}>
        { zip(buttons, counts1, maxima).map(([ attrs, c, m ], i) => <TaskSquare
            name={attrs['name']}
            current={c}
            maximum={m}
            increment={(_) => { dispatch({ action: 'inc', day_id: 0, habit_id: i }) }}
            decrement={(e) => { dispatch({ action: 'dec', day_id: 0, habit_id: i });
                                e.preventDefault(); }}
            colors={attrs['colors']}
            key={i}
        />) }
	   </div>
}
    
