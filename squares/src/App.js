import React from 'react';
import SquaresDisplay from './components/SquaresDisplay'

function App() {
    return (
        <div className="h-screen w-screen fixed flex flex-col relative">
            <div className="max-w-prose border-2 border-blue font-mono text-4xl items-center justify-center">
                Hi
            </div>
            <div className="absolute bottom-0 w-screen h-48 border-2 border-green">
                <SquaresDisplay squares_data={[1, 2, 3, 4, 5, 6, 7]}></SquaresDisplay>
            </div>
        </div>
    );
}

export default App;
