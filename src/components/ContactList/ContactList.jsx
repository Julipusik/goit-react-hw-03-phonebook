import { Contact } from "components/Contact/Contact";

export const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <div>
            {filteredContacts().map(contact => 
                (<Contact
                    key={contact.id}
                    name={contact.name}
                    number={contact.number}
                    id={contact.id}
                    deleteContact={deleteContact} />)
            )}
        </div>
    );
};
