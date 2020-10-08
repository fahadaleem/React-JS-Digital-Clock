import React from "react";


export const get_data = ()=>{
    const time = new Date()
    return{
        hours : time.getHours()%12,
        minutes : time.getMinutes(),
        seconds : time.getSeconds(),
        meridiem : time.getHours()<12?"AM":"PM",
    }
}


function Timer(){
    const data = get_data();
    return (
        <h1 id="timer">{data.hours.toString().length<2?"0"+data.hours:data.hours}:{data.minutes.toString().length<2?"0"+data.minutes:data.minutes}:{data.seconds.toString().length<2?"0"+data.seconds:data.seconds} {data.meridiem}</h1>
    )
}


export default Timer;