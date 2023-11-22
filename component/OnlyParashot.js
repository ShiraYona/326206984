import React from 'react'
import { useState } from "react"
import { useLocation } from 'react-router-dom'

function OnlyParashot () {
    //const [parashot,setParashot] = useState([])
    const location = useLocation()
    const allEvents = location.state

    return (
        <div className = "cards">
        { allEvents && allEvents.map(item => {
          if (item.className == "parashat") 
            return (
                <Cards element = {item.title}>
                <h1>{ item.title }</h1>
                <h3>{ item.start }</h3>
                <h3>{ item.description }</h3>
                </Cards>
            )  
        })}
          <button onClick = {() => navigate('/OnlyParashot',{state:events})}> הצג פרשות שבוע </button>
          <button onClick = {() => getData()}>הצג הכל </button>
            </div>   
        )
}
export default OnlyParashot