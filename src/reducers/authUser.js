const loginUser = (state = {

    userLoggin:false
    }, action) => {
        if(action.type === "LOGIN_USER"){            
            state = {...state, userLoggin: action.payload}
        } else if (action.type === "LOGOUT_USER"){            
            state = {...state, userLoggin: action.payload}
        }    
        return state;
    };

export default loginUser;