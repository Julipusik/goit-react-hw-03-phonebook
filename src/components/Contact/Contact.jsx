import { ContactItem, DeleteBtn } from "./Contact.styled"

export const Contact = ({ name, number, id, deleteContact }) => {
    return (
        <ContactItem>
            <p>
                {name}: {number}
            </p>
            <DeleteBtn onClick={deleteContact} id={id}>Delete</DeleteBtn>
        </ContactItem>
    )
}