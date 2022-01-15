import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

import googleOauthImage from './google_signin_buttons/web/2x/btn_google_signin_dark_normal_web@2x.png';

import supabase from './supabase';
import Dashboard from './Dashboard';

function Login() {
    async function signInWithGoogle() {
        const { error } = await supabase.auth.signIn({
            provider: 'google',
        });
        if (error) console.error(error);    // TODO: we should probably handle auth errors
    }
    return <div className="relative flex w-screen h-screen overflow-hidden bg-gray-800 space-around">
            <div className="block w-1/3 p-10 m-auto text-center text-white border border-red-200 bg-gradient-to-tr from-blue-700 to-purple-600 rounded-xl max-w-prose space-y-10"><span>mogus tracker</span>

                <div className="flex-col content-center justify-center border-2 border-red-300 align-center">
                    <img className="inline-block h-12 rounded-lg" onClick={signInWithGoogle} src={googleOauthImage} />
                </div>
            </div>
        </div>;
}

export default function() {
    if (supabase.auth.user() !== null)
        return <Dashboard />;
    else return <Login />
}
