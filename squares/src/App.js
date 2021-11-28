import React from 'react';
import SquaresDisplay from './components/SquaresDisplay'

function App() {
    return (
        <div className="fixed relative flex flex-col w-screen h-screen overflow-x-hidden">
            <div className="items-center justify-center font-mono text-4xl border-2 max-w-prose">
                Hew
            </div>
        <div className="w-2 text-4xl border border-black"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
            <div className="w-full border-2 border-green">
                <SquaresDisplay squares_data={[[2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7],[1, 2, 3, 4, 5, 6, 7],[1, 2, 3, 4, 5, 6, 7],[1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 10, 5, 6, 7], ].flat()}></SquaresDisplay>
            </div>
        </div>
    );
}

export default App;
