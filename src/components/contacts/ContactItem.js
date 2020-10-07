import React, {useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({contact}) => {
    const contactContext = useContext(ContactContext)
const {deleteContact, setCurrent} =contactContext;
const {contacts} =contactContext;

    const {id, name, email, phone} =contact
    const onDelete =()=>{
        deleteContact(id)
    }
    return (
        <div className="card bg-light mb-3" style={{maxWidth:"25rem"}}>
        <div className="card-body">
    <h6 className="card-title">{name}</h6>
    <h6 className="card-title">{email}</h6>
    <h6 className="card-title">{phone}</h6>
    <h6 className="card-title">
    <button type="button" className="btn btn-secondary btn-sm"
    onClick={()=> setCurrent(contact)}
     style={{margin:"10px"}}> {' '}
        Edit</button>
        <button type="button" 
        className="btn btn-danger btn-sm" onClick={onDelete} >
        delete</button>

    </h6>
        </div>
    </div>
    )
}

export default ContactItem
