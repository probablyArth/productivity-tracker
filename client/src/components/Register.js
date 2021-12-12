import React, { useState } from 'react'
import discord from '../assets/images/discord.svg';
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import isValid from "../utils/validate";
import postMonth from "../utils/postMonth";

function Register(props) {

    const [goal, setGoal] = useState('');
    const [targets, setTargets] = useState([0, 0, 0, 0]);
    const [error, setError] = useState('');

    function main() {

        if (isValid(goal, targets)) {
            
            postMonth({goal: goal, date: new Date(), expected_targets: targets, googleId: props.googleId})
            props.setRegistered(true)
            return
        }
        setError("Please fill all the required fields")
    }

    
    return (
            <div className='dashboard'>
            <div className="dashHead">
                <h2>Welcome <span style={{color: '#1F5CF8', fontFamily: 'Road Rage'}}>{props.name}</span></h2>
            </div>
            <div className="setGoals">
                <div className="monthlyGoals">
                <div className="unit">
                    <h1>Set a goal for this month</h1>
                    <input placeholder={"50 hours of guitar"} onChange={(e) => {setGoal(e.target.value)}}></input>
                </div>
                </div>
                <div className="weeklyGoals">
                    <h1>Set weekly Goals</h1>
                    <div className="weeks">
                        <div className="weekUnit">
                            <label>Week 1</label>
                            <input type="number" onChange={(e) => {

                                const newArr = [...targets];
                                newArr[0] = parseInt(e.target.value);
                                setTargets(newArr);

                            }}/>
                        </div>
                        <div className="weekUnit">
                            <label>Week 2</label>
                            <input type="number" onChange={(e) => {
                                
                                const newArr = [...targets];
                                newArr[1] = parseInt(e.target.value);
                                setTargets(newArr);

                            }}/>
                        </div>
                        <div className="weekUnit">
                            <label>Week 3</label>
                            <input type="number" onChange={(e) => {
                                
                                const newArr = [...targets];
                                newArr[2] = parseInt(e.target.value);
                                setTargets(newArr);

                            }}/>
                        </div>
                        <div className="weekUnit">
                            <label>Week 4</label>
                            <input type="number" onChange={(e) => {
                                
                                const newArr = [...targets];
                                newArr[3] = parseInt(e.target.value);
                                setTargets(newArr);

                            }}/>
                        </div>
                        <div className="error">
                            {error ? error : null}
                            <button onClick={() => main()}>Let's GO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
