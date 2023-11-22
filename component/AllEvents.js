import React from 'react'
import { useState } from "react"
import { useLocation } from 'react-router-dom'
import Dates from './Dates'


function AllEvents () {
    const [events, setEvents] = useState([])
    const location = useLocation()
    const sDate = location.state.startDate
    const eDate = location.state.endDate
    
    const getData = () =>{
        fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${sDate}&end=${eDate}`)
        .then(response => response.text())
        .then(result =>{
          let data = JSON.parse(result)  
          setEvents(data)
      } 
      ).catch(error => console.log('error', error))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className = "cards">
        { events && events.map(item => {
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
    export default AllEvents  