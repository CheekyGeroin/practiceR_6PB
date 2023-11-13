import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { getFilter } from 'redux/selectors/selectors';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};
