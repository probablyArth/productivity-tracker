import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './Register';
import Registered from './Registered';
import env from 'react-dotenv';

const base_url = env.BASE_URL

function Dashboard() {

    
    const [registered, setRegistered] = useState(false);
    const date = new Date();
    
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [googleId, setGoogleId] = useState(null);
    const [name, setName] = useState(null)
    
    
    useEffect(() => {
        if (localStorage.length > 0){
        const { googleId, name } = localStorage;
        if (localStorage.googleId){
            console.log(googleId)
        setGoogleId(googleId)
        setName(name)
        const url = `${base_url}/month?date=${date}&googleId=${googleId}`
        setLoading(true);
        axios.get(url).then((res) => {
            if (res.data) {
                if (!res.data.message) {
                    setRegistered(true)
                }
            }
            setData(res.data)
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    } else {
        setError({message: "Login First Duh"})
    }
    } else {
        setError({message: "Login First Duh"})
    }
    }, []);

    if(loading) return <h1>LOADING...</h1>;
    if(error) return <h1>{error.message}</h1>

    // if(data) if(!data.message) setRegistered(false);


    return (
        <div>
            {!registered && <Register name={name} googleId={googleId} setRegistered={setRegistered}/>}
            {registered && !loading && <Registered data={data}/>}
        </div>
    )
}   

export default Dashboard
