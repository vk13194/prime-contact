import React from 'react'
import Contact from '../contacts/Contact'
import ContactForm from '../contacts/ContactForm'
const Home = () => {
    return (
        <div className="container">
            <div className="row">
             <div className="col-sm-4">
             <ContactForm />
             </div>
             <div className="col-sm-8" style={{marginTop:'50px'}}>
             <Contact />
             </div>
            </div>
        </div>
    )
}

export default Home
