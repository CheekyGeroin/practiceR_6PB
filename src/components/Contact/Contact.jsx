import { useDispatch } from 'react-redux';
import { Item, Text, Button } from './Contact.styled';
import { deleteContact } from 'redux/contact/slice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};
