import React from 'react';
import SquaresDisplay from './components/SquaresDisplay'
import TaskSquareDay from './components/TaskSquareDay'

// https://stackoverflow.com/a/7765814/10372825
 Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

function App() {
    return (
        <div className="fixed relative flex flex-col w-screen h-screen overflow-x-hidden bg-gray-900">
            <div className="items-center justify-center font-mono text-4xl border-2 max-w-prose">
                Hew
            </div>
        <div className="border border-2 border-red-400 h-96">
            <div className="content-center justify-center w-1/2 m-auto font-mono text-3xl text-center text-gray-100 border-2 border-red-700 align-center rounded-3xl">
        hew
            </div>
        </div>
        <div className="w-2 text-4xl"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
        <TaskSquareDay/>
            <div className="w-full">
                <SquaresDisplay squares_data={[[1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7],[1, 2, 3, 4, 5, 6, 7],[1, 2, 3, 4, 5, 6, 7],[1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 10, 5, 6, 7], ].flat()}></SquaresDisplay>
            </div>
        </div>
    );
}

export default App;
