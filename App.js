import './App.css'
import Dates from './Dates'
import AppRoutes from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
        <AppRoutes>
          <Dates></Dates>
        </AppRoutes>
      </BrowserRouter>
    </div>
  )
}
export default App
