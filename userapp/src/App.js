import React from 'react'
import Users from './components/users'
import Personaldetails from './components/personaldetails'
import {Routes,Route} from 'react-router-dom'
import EditDetails from './components/EditDetails'

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/" element={<Users/>}/>
                <Route path = "/details/:id" element={<Personaldetails/>}/>
                <Route path='/edit' element={<EditDetails/>}/>
            </Routes>
        </div>
    )
}

export default App
