import React from "react";
import ContactCard from "./ContactCard";

const AddressBook = ({contacts}) => {
    return (
        <div className="Address">
            <div className = "cards">
            <div>{`the length of the list is ${contacts.length}`}</div>
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact}/>
            ))}
            

            </div>
        </div>
    );
};


export default AddressBook;
