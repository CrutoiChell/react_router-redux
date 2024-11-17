import s from "./Tasks.module.css";
import { Task } from '../Task/Task'
import { useDispatch } from "react-redux";
import { handleEdit } from "../../TodoSlice";
export function Tasks({ arr, theme }) {
    let disp = useDispatch()
    const editList = (id, field, event) => {
        let copy = arr
        copy.map(item => {
            if (item.id === id) {
                item[field] = event.target.value
            }
            return item;
        });
        disp(handleEdit(copy))
    }

    return (
        <ul className={s.container}>
            {
                arr.map((item) => (
                    <Task
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        isEdit={item.isEdit}
                        isChecked={item.isChecked}
                        editList={editList}
                        theme={theme}
                    />
                ))
            }
        </ul >
    )
}

