import React from 'react'

const NavReducer = (state='page1',action) => {
    switch(action.type){
        case "page":
            state=action.data;
            default:return state;
    }
}
export default NavReducer
   
