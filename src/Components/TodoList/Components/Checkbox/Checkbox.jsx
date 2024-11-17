import { useDispatch } from 'react-redux';
import s from './Checkbox.module.css'
import { handleTogleCheck } from '../../TodoSlice';
export const Checkbox = ({ isChecked, id }) => {

  let disp = useDispatch()

  return (<>
    <input
    id={id + '!'}
      type="checkbox"
      className={s.checkboxElement}
      checked={isChecked}
      onChange={() => disp(handleTogleCheck(id))}
    />
    <label htmlFor={id + '!'} className={s.checkboxWrapper}></label>
  </>

  );
};