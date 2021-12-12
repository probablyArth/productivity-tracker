import { React, useState } from 'react';
import decideWeek from '../utils/decideWeek';
import check from "../assets/images/check.svg"
import update from "../assets/images/update.svg";
import axios from 'axios';
import Chart from './Chart';

function renderWeeks(data) {

    console.log(data)
    var rows = []
    var unup = []
    for (let i=0; i < decideWeek(); i++) {
        
        if (data.updated[i]){
        rows.push({week: i+1, done: data.achieved_targets[i], comment: data.comments[i]})
        } else {
        unup.push({week: i+1, target: data.expected_targets[i], i:i})
        }
    }
    console.log(rows)
    return {rows: rows, unup:unup }
}



function Registered({data}) {



    const [achieved, setAchieved] = useState(data.achieved_targets);
    const [comments, setComments] = useState(data.comments);
    const [updated, setUpdated] = useState(data.updated)
    
    
    function updateTargets(index) {
        
        const newUpdated = [...updated];
        newUpdated[index] = true
        setUpdated(newUpdated)
        const date = new Date();
        const payload = {date: date, updated: newUpdated, achieved_targets: achieved, comments: comments, googleId: data.googleId}
        
        axios.post(`http://localhost:4000/target`, payload)
        .finally(window.location.href="dashboard")
    }
    
    return (
        <div>
            <div className="registeredHead">
                <div></div>
                <h1>
                    {data.goal}
                </h1>
                <div>
                </div>
            </div>
            <div className="dash">
                <div className="grid">
                    <h2>Week</h2>
                    <h2>Done</h2>
                    <h2>Comment</h2>
                    <div></div>
                    {renderWeeks(data).rows.map(row => {
                        return(<>
                            <h1 class="week">{row.week}</h1>
                            <h1 class="done">{row.done}</h1>
                            <h1 class="comment">{row.comment}</h1>
                            <img class="check" src={check} />
                        </>)})}
                    {renderWeeks(data).unup.map((row) => {return(<><label>{row.week}</label>
                    <input type="number" min="0" max={row.target}  onKeyDown={ (evt) => (evt.key === 'e' || evt.key === '+' || evt.key === '-') && evt.preventDefault() } placeholder={row.target} onChange={(e) => {
                        if (parseInt(e.target.value) > parseInt(row.target)) {
                            e.target.value = row.target
                        }
                        const newAchieved = [...achieved];
                        newAchieved[row.i] = parseInt(e.target.value)
                        setAchieved(newAchieved);
                    }}/>
                    <textarea maxLength="150" className="inCom" placeholder="Today was great, I felt very good doing it" onChange={
                        (e) => {
                            const newComments = [...comments];
                            newComments[row.i] = e.target.value
                            setComments(newComments)
                        }
                    }/>
                    <img className="update" src={update} onClick={() => updateTargets(row.i)}/></>)})}
                    {(decideWeek() <5) && !renderWeeks(data).unup &&
                    <>
                    <div className="wait">Come back next week to update</div><div></div></>}
                </div>
                <Chart data={data} />
            </div>
        </div>
    )
}

export default Registered
