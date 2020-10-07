import React, {useReducer} from 'react'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import { v1 as uuidv1 } from 'uuid';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
   
  } from '../type';
const ContactState = (props) => {
    const initialState = {
        contacts:[     {
                 id:1,
                 name:"vijay kumar",
                 email:"vijay@gmail.com",
                 phone:"111-111-1111",
                 
             },
             {
                 id:2,
                 name:"sanjay kumar",
                 email:"sanjay@gmail.com",
                 phone:"111-111-2222",
                 
             }
         ],
         current:null
     }
const [state, dispatch] = useReducer(contactReducer, initialState)
const deleteContact =(id)=>{
    dispatch({type:DELETE_CONTACT, payload:id})
}

const addContact =(contact) =>{
    contact.id=uuidv1()
    dispatch({type:ADD_CONTACT, payload:contact})
}
const setCurrent =(contact) =>{
    dispatch({type:SET_CURRENT, payload:contact})
}
const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload:contact });
  };
// Clear Current Contact
const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
    return (
        <ContactContext.Provider
        value={{
            contacts:state.contacts,
            current:state.current,
            deleteContact,
            addContact,
            setCurrent,
            updateContact,
            clearCurrent
            
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
