import React, { useState, useReducer } from 'react';
import SquaresDisplay from './components/SquaresDisplay';
import TaskSquareDay from './components/TaskSquareDay';

import squareReducer from './squareReducer';

// https://stackoverflow.com/a/7765814/10372825
 Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

function App() {
    const og_thing = [[1, 1, 0], [4, 4, 4], [0, 0, 0], [3, 1, 3], [4, 2, 0], [1, 0, 1], [3, 4, 3], [2, 4, 4], [2, 3, 2], [1, 2, 2], [4, 1, 0], [0, 0, 2], [1, 0, 3], [3, 1, 1], [3, 4, 0], [1, 0, 0], [4, 1, 1], [0, 0, 0], [1, 0, 3], [4, 1, 4], [2, 1, 3], [1, 2, 3], [4, 4, 2], [2, 1, 2], [1, 0, 1], [3, 0, 4], [2, 3, 4], [1, 4, 4], [3, 0, 4], [2, 3, 4], [0, 2, 2], [4, 0, 4], [3, 4, 4], [2, 1, 0], [0, 0, 0]];

    const [ squares, sq_dispatch ] = useReducer(squareReducer, { counts: og_thing, maxima: [2, 4, 6] });
    console.log('today', squares.counts[0])

    const sum_today  = squares.counts[0].reduce((a, c) => a + c, 0);
    const sum_maxima = squares.maxima   .reduce((a, c) => a + c, 0);

    return (
        <div className="fixed relative flex flex-col w-screen h-screen overflow-x-hidden bg-gray-900">
	    <div className="mt-2 text-5xl font-extrabold text-center text-gray-500">MOGUS TRACKER</div>
        {/*<div className="items-center justify-center font-mono text-4xl border-2 max-w-prose">
                Hew
            </div>*/}
        <div className="font-mono text-2xl text-gray-300 h-96 align-center">
            <div className="w-2/3 py-12 m-auto mt-5 bg-gray-800" style={{borderRadius: 70 + 'px', maxWidth: 349 + 'px', marginBottom: -20+"px", marginTop: -20+"px"}}>
                <p className="text-center">Current Streak</p>
                <div className="content-center justify-center m-auto font-mono font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-purple-400 align-center rounded-3xl" style={{fontSize: 8 + "em", lineHeight: 1}}>
        { sum_today >= sum_maxima ? 12 : 11 }
                </div>
            </div>
        </div>
        <div className="w-2 text-xl"><br/></div>
	    <TaskSquareDay counts1={squares.counts[0]} maxima={squares.maxima} dispatch={sq_dispatch}/>
	    <div className="w-full">
		<div className="w-5/6 pb-12 m-auto mt-8 bg-gray-800 rounded-2xl" style={{maxWidth: 507+'px'}}>
		    <SquaresDisplay squares_data={squares}></SquaresDisplay>
		</div>
	    </div>
	</div>
    );
}

export default App;
