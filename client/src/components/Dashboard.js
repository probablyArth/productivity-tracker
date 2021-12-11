import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './Register';

function Dashboard() {

    const { googleId, name, imageUrl, email } = localStorage;
    const [month, setMonth] = useState({});
    const [registered, setRegistered] = useState(false);



    useEffect(() => {
                const date = new Date();

                axios.get(`http://localhost:4000/month?date=${date}&googleId=${googleId}`)
                .then((res) => {
                    if (!(res.data.message === "Month not found")) {
                        setRegistered(true);
                        setMonth(res.data);
                    }
                })
                .catch(err => console.error(err))

            }, [])

    return (
        <div>
            {!registered && <Register name={name} googleId={googleId} setRegistered={setRegistered}/>}
        </div>
    )
}

export default Dashboard
