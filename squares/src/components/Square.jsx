import React from 'react';

export default function Square(props) {
    return <div className="w-12 h-12 m-1 rounded-md" style={{"backgroundColor": `rgba(50, 108, 204, ${props.data / props.scalar})`}}></div>
}

