import { Formik } from "formik";
import { FormEl, FormField, FormBtn } from "./ContactForm.styled";

export const ContactForm = ({addContact}) => {
    return (
       <Formik
        initialValues={{ name: '', number: '', }}
        onSubmit={(values, {resetForm}) => {
          addContact(values);
          resetForm();
        }}
      >

        <FormEl>
          <FormField name="name" type="text"
            placeholder="Enter a name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
          <FormField name="number" type="tel"
            placeholder="Enter a phone number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
          <FormBtn type="submit">Add contact</FormBtn>
          </FormEl>

        </Formik>
    )
}
