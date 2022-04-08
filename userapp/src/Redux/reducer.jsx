let initialState = {
    userData: [],
    user : {},
    editAble : {}
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADUSERS":
            return {
                ...state,
                userData: [...state.userData, action.paylod]
            }
        case "GETDETAILS":
            return {
                ...state,
                user : action.paylod
            }
        case "DELETEUSER":
            return {
                ...state,
                userData : [action.paylod]
            }  
        case "EDITUSER" :  
            
            return {
                ...state,
                user : action.paylod
            } 
        case "UPDATEUSER" : 
          return {
              ...state,
              
          }    
              
        default: return state;

    }
}

export default Reducer;