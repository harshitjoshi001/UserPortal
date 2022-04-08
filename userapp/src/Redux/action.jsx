export const loadUsers = (data)=>{
    return({
        type : "LOADUSERS",
        paylod : data
    })
}

export const getDetails = (data)=>{
    
    return({
        type : "GETDETAILS",
        paylod : data
    })
}

export const userDelete = (data)=>{
    return(
        {
            type : "DELETEUSER",
            paylod : data
        }
    )
}

export const userEdit = (data)=>{
    return(
        {
            type : "EDITUSER",
            paylod : data
        }
    )
}

export const updateUser = (data) =>{
    return(
        {
            type : "UPDATEUSER",
            paylod : data
        }
    )
}