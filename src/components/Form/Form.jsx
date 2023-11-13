import { useState } from 'react';
import { FormContainer, Label, Input, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contact/slice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const submitForm = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in your contacts!`);
      reset();
      return;
    }
    dispatch(addContact(name, number));
    reset();
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};
