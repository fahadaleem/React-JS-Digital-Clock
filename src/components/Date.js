import React from "react";



function Date_Component(){

   const date = new Date(); 
   const month = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']

   return (
       <h1 id="date">{date.getDate().toString().length<2?'0'+date.getDate():date.getDate()}-{month[date.getMonth()]}-{date.getFullYear()}</h1>
   )
}


export default Date_Component;