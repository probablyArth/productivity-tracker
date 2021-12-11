import React, { useState } from 'react'
import discord from '../assets/images/discord.svg';
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import isValid from "../utils/validate";
import postMonth from "../utils/postMonth";

function Register(props) {

    const [goal, setGoal] = useState('');
    const [unit, setUnit] = useState('');
    const [twt, setTwt] = useState('');
    const [ln, setLn] = useState('');
    const [targets, setTargets] = useState([0, 0, 0, 0]);
    const [error, setError] = useState('');

    function main() {

        if (isValid(goal, unit, twt, ln, targets)) {
            postMonth({goal: goal, unit: unit, date: new Date(), expected_targets: targets, finished: false})
            props.setRegistered(true)
            return
        }
        setError("Please all the required fields")
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
                <div className="unit">
                    <h1>Unit of activity</h1>
                    <input placeholder={"50 hours of guitar, hours is the unit here"} onChange={(e) => {setUnit(e.target.value)}}></input>
                </div>
                <div className="socials">
                    <h1>Connect your socials</h1>
                    <div className="strip">
                        <img src={twitter}/>
                        <input onChange={(e) => setTwt(e.target.value)}/> 
                    </div>
                    <div className="strip">
                        <img src={linkedin} />
                        <input onChange={(e) => setLn(e.target.value)}/> 
                    </div>
                </div>
                </div>
                <div className="weeklyGoals">
                    <h1>Set weekly Goals</h1>
                    <div className="weeks">
                        <div className="weekUnit">
                            <label>Week 1</label>
                            <input type="number" onChange={(e) => {

                                const newArr = [...targets];
                                newArr[0] = e.target.value;
                                setTargets(newArr);

                            }}/>
                        </div>
                        <div className="weekUnit">
                            <label>Week 2</label>
                            <input type="number" onChange={(e) => {
                                
                                const newArr = [...targets];
                                newArr[1] = e.target.value;
                                setTargets(newArr);

                            }}/>
                        </div>
                        <div className="weekUnit">
                            <label>Week 3</label>
                            <input type="number" onChange={(e) => {
                                
                                const newArr = [...targets];
                                newArr[2] = e.target.value;
                                setTargets(newArr);

                            }}/>
                        </div>
                        <div className="weekUnit">
                            <label>Week 4</label>
                            <input type="number" onChange={(e) => {
                                
                                const newArr = [...targets];
                                newArr[3] = e.target.value;
                                setTargets(newArr);

                            }}/>
                        </div>
                        <button onClick={() => main()}>Let's GO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
