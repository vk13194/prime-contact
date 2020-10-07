import React,{useState, useContext, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'
const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const {addContact, current, updateContact,  clearCurrent} = contactContext;
    useEffect(()=>{
        if(current !== null){
          setContact(current)
        }else {
         setContact({
           name:'',
          email:'',
          phone:'',
          
          })
        }
      }, [contactContext, current])
    const [contact, setContact]= useState({
        name:'',
        email:'',
        phone:''
    })
    const {name, email, phone} =contact;
    console.log(current)
    const onChange =(e) =>{
        setContact({...contact, [e.target.name]:e.target.value})
    }
    const onSubmit =(e) =>{
        e.preventDefault();
        if(current===null){
            addContact(contact)
          }else{
            updateContact(contact)
          }
        setContact({
         name:'',
        email:'',
        phone:''
        })
    }
    const clearAll =()=>{
        clearCurrent();
      }
    return (
        <form onSubmit={onSubmit}>
        <h4 className="text-primary">{current? 'Edit Contact':'Add Contact'}</h4>
        <div className="form-group">
        <label>Enter Name</label>
        <input type="text" placeholder="enter Name"
        value={name} onChange={onChange} name="name"
         className="form-control" />
        </div> 
        <div className="form-group">
        <label>Enter email</label>
        <input type="text" placeholder="enter email"
        value={email} onChange={onChange} name="email"
         className="form-control" />
        </div> 
        <div className="form-group">
        <label>Enter Phone</label>
        <input type="text" placeholder="enter phone"
        value={phone} onChange={onChange} name="phone"
         className="form-control" />
        </div> 
        <div>
         <input
          type='submit'
          value={current? 'Update Contact':'Add Contact'}
          className="btn btn-secondary btn-lg btn-block"
        />
        </div>
       <div>
        {current && (
        <div>
          <button className="btn btn-light btn-lg btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
        
      )}
      </div>
        </form>
    )
}

export default ContactForm
