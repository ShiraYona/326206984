import React from 'react'
import { Route, Routes } from "react-router-dom"
import Dates from "./Dates"
import AllEvents from "./AllEvents"

const AppRoutes = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Dates/>}></Route>
      <Route path="/Dates" element={<Dates/>}></Route>
      <Route path="/AllEvents" element={< AllEvents/>}></Route>
      <Route path="/OnlyParashot" element={< OnlyParashot/>}></Route>
    </Routes>
  )
}

export default AppRoutes
