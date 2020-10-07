import React, {useContext, Fragment} from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem1'
const Contact = () => {
    const contactContext = useContext(ContactContext)
    const {contacts} =contactContext;
    return (
        <Fragment>
           <ContactItem  contact={contacts} />
        </Fragment>
    )
}

export default Contact
