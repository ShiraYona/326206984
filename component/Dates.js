import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Dates() {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const navigate = useNavigate()
  
    const goApi = (startDate, endDate) => {
        if (!startDate || !endDate) {
          return
        }
        navigate('/AllEvents',{state: { startDate:startDate, endDate:startDate }}) 
    }
    return(
    <div className ={Styles.date}>
        <input
            placeholder = "הכנס תאריך התחלה"
            type="date"
            onBlur={(d) => setStartDate(d.target.value)}
            style={{fontSize:"45px"}}
        />
        <input
            placeholder = "הכנס תאריך סיום"
            type="date"
            onBlur={(d) => setEndDate(d.target.value)}
            style={{fontSize:"45px"}}
        />
        <Button onClick={() => goApi()}>קבל שבתות ומועדים..</Button>
    </div>
    )
}
export default Dates