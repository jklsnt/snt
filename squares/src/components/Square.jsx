import React from 'react';
import { zip } from '../util';

export default function Square({ counts1, maxima, day_id }) {
    const opacity = zip(counts1, maxima)
        .reduce((a, [c, m]) => a + Math.min(1, c/m), 0)
        / maxima.length;

    // following math counts all things as the same
    //const has = counts1.reduce((a, c) => a + c, 0);
    //const max = maxima .reduce((a, c) => a + c, 0);
    //const opacity = Math.min(1, has / max);

    //console.log(day_id, counts1, maxima, opacity);
    return <div
        className="w-12 h-12 m-1 rounded-md"
        style={{"backgroundColor": `rgba(29, 88, 216, ${opacity})`}}
    ></div>
}

