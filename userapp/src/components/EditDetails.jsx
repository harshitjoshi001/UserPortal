import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { userEdit, getDetails } from '../Redux/action'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const EditDetails = () => {
    const dispatch = useDispatch();
    const mystate = useSelector(state => state.user)
    const wholeArr = useSelector(state => state)
    const [name, setName] = useState(mystate.name)
    const [userName, setUserName] = useState(mystate.username)
    const [email, setEmail] = useState(mystate.email)
    const [nav, setNav] = useState(false)

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleUserName = (event) => {
        setUserName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const update = (e) => {

        let detail = {
            name: name,
            userName: userName,
            email: email
        }
        console.log(detail);
        console.log(wholeArr.userData[0]);
        let flt = wholeArr.userData[0].filter(data => data.id === mystate.id)
        console.log(flt);
        
        dispatch(getDetails(detail))
        //   setNav(true)
    }

    return (

        <div>
            {nav ? <Navigate to='/' /> : ""}
            <Navbar />
            <div className="container" >
                <div className="col-md-12">
                    <div className="card b-1 hover-shadow mb-20">
                        <div className="media card-body">
                            <div className="media-left pr-12">
                                <img className="avatar avatar-xl no-radius" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                            </div>
                        </div>
                        <br />
                        <form>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Fullname : </label> <input className="form-control me-2" type="search" name="Fullname" value={name} onChange={handleName} />
                                    <br /><label>Username : </label> <input className="form-control me-2" type="search" name="Username" value={userName} onChange={handleUserName} />
                                    <br /><label>Email :</label> <input className="form-control me-2" type="search" value={email} name="Email" onChange={handleEmail} />

                                </div>
                                <br />

                            </div>
                        </form>
                        <footer className="card-footer flexbox align-items-center">

                            <div className="card-hover-show">
                                <button type="submit" className="btn btn-xs fs-10 btn-bold btn-primary" onClick={() => { update(mystate.id) }} >UPDATE</button>
                            </div>
                        </footer>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default EditDetails
