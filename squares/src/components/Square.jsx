import React from 'react';
import { completion } from '../semantics';

export default function Square({ counts1, maxima }) {
    const opacity = completion(counts1, maxima);

    return <div
        className="w-12 h-12 m-1 rounded-md"
        style={{
            backgroundColor: `rgba(29, 88, 216, ${opacity})`,
            border: opacity >= 1 ? '2px solid white' : 'none',
        }}
    ></div>
}

