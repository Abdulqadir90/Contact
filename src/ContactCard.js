import React from "react";


const ContactCard = ({contact}) => {
    const {
        name: {title, first, last},
        location: {street, country, city, postcode, state },

    } = contact;
    return (
        <div className="ContactCard">
            <h2>{title} {first} {last}</h2>
        <img src={contact.picture.medium}/>
            
            
        </div>
    )
}

export default ContactCard;
