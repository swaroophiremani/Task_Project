import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddDetails from './Components/AddDetails'
import GetDetails from "./Components/GetDetails"
import EditDetails from "./Components/EditDetails"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddDetails/>}/>
        <Route path="/getdetails" element={<GetDetails/>}/>
        <Route path="/edit-details" element={<EditDetails/>} />
      </Routes>
      </BrowserRouter>
   {/* <AddDetails/>
   <GetDetails/> */}
    </div>
  )
}
export default App
