import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard';

function Signup() {
    return <div>SIGN UP!!!</div>;
}

export default function() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}
