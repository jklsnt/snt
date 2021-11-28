import React from 'react';

export default function Square(props) {
    return <div className="w-12 h-12 m-1 rounded-md" style={{"backgroundColor": `rgba(29, 88, 216, ${props.data / props.scalar})`}}></div>
}

