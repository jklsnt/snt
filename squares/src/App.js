import React, { useState } from 'react';
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
            <div className="block w-1/3 p-10 m-auto text-center text-white bg-gradient-to-tr from-blue-700 to-purple-600 rounded-xl max-w-prose space-y-10"><span>mogus tracker</span>

                <div className="flex-col content-center justify-center align-center">
                    <button onClick={signInWithGoogle}><img className="inline-block h-12 rounded-lg" src={googleOauthImage} /></button>
                </div>
            </div>
        </div>;
}

function logOut(setter) {
    console.log('user pre log out', supabase.auth.user());
    supabase.auth.signOut()
        .then(() => { setter(false) });
}
function logIn(provider, setter) {
    supabase.auth.signIn({ provider: provider })
        .then(() => { setter(true) });
        //.then(({ error }) => { if (error) console.error(error); });
    setter(true);
}

export default function() {
    const [ authed, setAuthed ] = useState(supabase.auth.user() !== null);

    supabase.auth.onAuthStateChange((_, session) => {
        if (session?.user) setAuthed(true);
        else setAuthed(false);
    });

    return <div>
        { !authed ? <Login logIn={(provider) => { logIn(provider, setAuthed) }} /> :
            <Dashboard logOut={() => { logOut(setAuthed) }} /> }
    </div>
}
