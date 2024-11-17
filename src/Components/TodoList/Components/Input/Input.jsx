import s from './Input.module.css'
import { handleAdd } from '../../TodoSlice'
import { useDispatch } from 'react-redux'
import { randomId } from '../../../../helpers/random'
export function Input({ list, setList, theme }) {
    let disp = useDispatch()

    const addList = (list) => {
        if (list.trim()) {
            const obj = { id: randomId(), text: list, isEdit: false, isChecked: false }
            disp(handleAdd(obj))
            setList('')
        }
    };
    
    return (
        <div className={s.container}>
            <input
                placeholder='Create a new note...'
                className={theme ? s.Darkinput : s.input}
                value={list}
                onChange={event => setList(event.target.value)}
            />
            <button className={s.btn} onClick={() => addList(list)}> Create </button>
        </div>

    )
}