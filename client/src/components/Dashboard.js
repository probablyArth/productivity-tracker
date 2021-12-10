import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {

    const { googleId, name, imageUrl, email } = localStorage;
    const [month, setMonth] = useState({});
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        (async function() {
            try {

                const date = Date();
                const response = await axios.get(`http://localhost:4000/month?date=${date}`);
                
                if (response.data.message === !"Month not found") {
                    setRegistered(true);
                }
            } catch (err) {
                console.error(err)
            }
        })();
    }, [])

    return (
        <div className='dashboard'>
            <h2>Welcome <span style={{color: '#1F5CF8'}}>{name}</span></h2>
            <div>
                
            </div>
        </div>
    )
}

export default Dashboard
