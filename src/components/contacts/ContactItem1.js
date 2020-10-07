import React, {useContext,useState} from 'react'
import ContactContext from '../../context/contact/contactContext'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const ContactItem1 = ({contact}) => {
    const contactContext = useContext(ContactContext)
const {deleteContact, setCurrent} =contactContext;
    //const {id, name, email, phone} =contact
   // const {contacts} =contactContext;
const [globalFilter, setGlobalFilter] =useState(null)

   
   // console.log(contact)
    const  actionBodyTemplate=(rowData)=> {
        console.log(rowData)
        
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" 
                className="p-button-rounded p-button-success p-mr-2"
                onClick={()=> setCurrent(rowData)}
                  />
                <Button icon="pi pi-trash"
                 className="p-button-rounded p-button-warning" 
                 onClick={()=>deleteContact(rowData.id)}  />
            </React.Fragment>
        );
    }
    const header = (
        <div className="table-header">
            List of Customers
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" 
                onInput={(e) => setGlobalFilter(e.target.value )} placeholder="Global Search" />
            </span>
        </div>
    );
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
    return (
       <div>
        <div className="card">
     <DataTable value={contact}  paginator
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
   currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[3,5,10,20,50]}
    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} 
   header={header} globalFilter={globalFilter} >
 <Column field="name" header="Name" sortable></Column>
     <Column field="email" header="Email" sortable></Column>
    <Column field="phone" header="Phone"
        sortable></Column> 
    <Column header="Action" body={actionBodyTemplate}></Column>

        </DataTable>

                </div>
       </div>
    )
}

export default ContactItem1
