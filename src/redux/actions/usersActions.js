import { ActionTypes } from "../constants/actionTypes";
export const setUsers=(users)=>{
    return {
        type:ActionTypes.SET_USERS,
        payload:users
    }
}
export const selectedUser=(user)=>{
    return {
        type:ActionTypes.SELECTED_USER,
        payload:user
    }
}
export const removeSelectedUser=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_USER,
        
    }
}
export const setSearchBox=(Searchtext)=>{
    return {
        type:ActionTypes.SET_SEARCH_BOX,
        payload:Searchtext
    }

    
}
export const deleteUser=(userId)=> {
    return {
      type: ActionTypes.DELETE_USER,
      payload: userId,
    };
  }
  export const createUser=(user) =>{
    return {
      type:ActionTypes.CREATE_USER ,
      payload: user,
    };
  }
  export function updateUser(user) {
    return {
      type: ActionTypes.UPDATE_USER,
      payload: user,
    };
  }