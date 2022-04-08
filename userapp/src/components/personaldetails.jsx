import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDetails } from '../Redux/action'
import Navbar from './Navbar'


const Personaldetails = () => {
    const mystate = useSelector(state => state.user)
    const params = useParams();
    const [show, setShow] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res) => (res.json())).then
            ((data) => {
                dispatch(getDetails(data))
                console.log(mystate)
            })
    }, [])

    return (
        <div>
            {console.log(mystate)}
            <Navbar/>
        <div className="container">
           {mystate? <div className="col-md-12">
                <div className="card b-1 hover-shadow mb-20">
                    <div className="media card-body">
                        <div className="media-left pr-12">
                            <img className="avatar avatar-xl no-radius" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                        </div>
                        <div className="media-body">
                            <div className="mb-2">
                                <span className="fs-20 pr-16">Username : {mystate.username}</span>
                                <br />
                                <strong className="fs-16 fw-300 ls-1">ID : {mystate.id} </strong>
                            </div>
                            <strong className="fs-16 fw-300 ls-1">Name  : {mystate.name}</strong>
                            <br />
                            <strong className="fs-16 fw-300 ls-1"> Email : {mystate.email}</strong>
                            <br />
                          
                        </div>

                    </div>
                    <footer className="card-footer flexbox align-items-center">
                        <div className="card-hover-show">
                            <button className="btn btn-xs fs-10 btn-bold btn-warning"><Link to="/">Back</Link></button>
                        </div>
                    </footer>
                </div>
                <br />
            </div>:null}
        </div></div>
    )
}

export default Personaldetails
