import React, { useEffect, useReducer } from 'react';
import SquaresDisplay from './components/SquaresDisplay';
import TaskSquareDay from './components/TaskSquareDay';

import squareReducer from './squareReducer';
import { completion } from './semantics';
import { mapUntil, zip } from './util';

//// https://stackoverflow.com/a/7765814/10372825
// Date.prototype.getWeek = function() {
//    var onejan = new Date(this.getFullYear(), 0, 1);
//    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
//}

function Dashboard() {
    const og_thing = [[1, 1, 0], [4, 4, 6], [2, 5, 6], [3, 1, 3], [4, 2, 0], [1, 0, 1], [3, 4, 3], [2, 4, 4], [2, 3, 2], [1, 2, 2], [4, 1, 0], [0, 0, 2], [1, 0, 3], [3, 1, 1], [3, 4, 0], [1, 0, 0], [4, 1, 1], [0, 0, 0], [1, 0, 3], [4, 1, 4], [2, 1, 3], [1, 2, 3], [4, 4, 2], [2, 1, 2], [1, 0, 1], [3, 0, 4], [2, 3, 4], [1, 4, 4], [3, 0, 4], [2, 3, 4], [0, 2, 2], [4, 0, 4], [3, 4, 4], [2, 1, 0], [0, 0, 0]];
    const maxima = og_thing.map(_ => [2, 1, 3]);

    const [ squares, sq_dispatch ] = useReducer(squareReducer, { counts: og_thing, maxima: maxima });
    const completions = mapUntil(zip(squares.counts, squares.maxima)
            .slice(1)
            .map(([countd, maxima]) => completion(countd, maxima)),
        opacity => opacity >= 1)
        .reduce((a, c) => a + c, 0);
    const streak_text = `${ completions }${ completion(squares.counts[0], squares.maxima[0]) >= 1? '+' : '' }`

    useEffect(() => { document.title = `${streak_text} days | mogus tracker` }, [streak_text]); // https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app-1l7k

    return (
        <div className="fixed relative flex flex-col w-screen h-screen overflow-x-hidden bg-gray-900 select-none">
        <div className="mt-2 text-5xl font-extrabold text-center text-gray-500">MOGUS TRACKER</div>
        {/*<div className="items-center justify-center font-mono text-4xl border-2 max-w-prose">
                Hew
            </div>*/}
        <div className="font-mono text-2xl text-gray-300 h-96 align-center">
            <div className="w-2/3 py-12 m-auto mt-5 bg-gray-800" style={{borderRadius: 70 + 'px', maxWidth: 349 + 'px', marginBottom: -20+"px", marginTop: -20+"px"}}>
                <p className="text-center">Current Streak</p>
                <div className="content-center justify-center m-auto font-mono font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-purple-400 align-center rounded-3xl" style={{fontSize: 8 + "em", lineHeight: 1}}>
                    {streak_text}
                </div>
            </div>
        </div>
        <div className="w-2 text-xl"><br/></div>
        <TaskSquareDay counts1={squares.counts[0]} maxima={squares.maxima[0]} dispatch={sq_dispatch}/>
        <div className="w-full">
        <div className="w-5/6 pb-12 m-auto mt-8 bg-gray-800 rounded-2xl" style={{maxWidth: 507+'px'}}>
            <SquaresDisplay squares_data={squares}></SquaresDisplay>
        </div>
        </div>
    </div>
    );
}

export default Dashboard;

