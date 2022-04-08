import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, userDelete, userEdit } from '../Redux/action'
import { Link, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state)
    const [redirect, setRedirect] = useState(false);
    const [edit,setEdit] = useState(false)
    const [id, setId] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => (res.json())).then((data) => {
            dispatch(loadUsers(data))
        })
    }, [])

    const handleClick = (e) => {
        setId(e.target.id)
        setRedirect(true);
    }

    const deleteUser = (e) => {
        const data = users.userData[0].filter(item => item.id !== e)
        console.log("data", data)
        dispatch(userDelete(data))
    }

    const editDetails = (id)=>{
         const filtered = users.userData[0].find(fltuser => fltuser.id === id)
         console.log(filtered);
        dispatch(userEdit(filtered))
        setEdit(true);
    }
    return (
        <div>
            {edit ? <Navigate to= '/edit'/> : ''}
            {redirect ? <Navigate to={`/details/${id}`} /> : ''}
           <Navbar/>
            <br />
            <br />
            <br />
            { users?.userData[0]?.map((data, i) => {
                return (
                    <div className="container" key={i}>
                        <div className="col-md-12">
                            <div className="card b-1 hover-shadow mb-20">
                                <div className="media card-body">
                                    <div className="media-left pr-12">
                                        <img className="avatar avatar-xl no-radius" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                                    </div>
                                    <div className="media-body">
                                        <div className="mb-2">
                                            <span className="fs-20 pr-16">Username : {data.username}</span>
                                            <br />
                                            <strong className="fs-16 fw-300 ls-1">ID : ({data.id})</strong>
                                        </div>
                                        <strong className="fs-16 fw-300 ls-1">Name  : {data.name}</strong>
                                        <br />
                                        <strong className="fs-16 fw-300 ls-1"> Email : {data.email}</strong>

                                    </div>

                                </div>
                                <footer className="card-footer flexbox align-items-center">
                                    <div className="card-hover-show">
                                        <button className="btn btn-xs fs-10 btn-bold btn-warning" onClick={(e) => handleClick(e)} id={data.id} >Get Details</button>
                                    </div>
                                    <div className="card-hover-show">
                                        <button className="btn btn-xs fs-10 btn-bold btn-primary" onClick={()=>{editDetails(data.id)}}>Edit Details</button>
                                    </div>
                                    <div className="card-hover-show">
                                        <button className="btn btn-xs fs-10 btn-bold btn-warning" onClick={() => deleteUser(data.id)} >Delete user</button>
                                    </div>
                                </footer>
                            </div>
                            <br />
                        </div>
                    </div>
                )
            }) 
             
            
            }

        </div>
    )
}

export default Users