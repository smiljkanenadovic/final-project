export function loginUser(login){      
        return function(dispatch){
                dispatch({type:"LOGIN_USER", payload: login});  
        }

}