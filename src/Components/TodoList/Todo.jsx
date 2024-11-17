import { useState } from 'react'
import s from './Todo.module.css'
import { Tasks } from './Components/Tasks/Tasks';
import { Input } from './Components/Input/Input';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleDelite } from './TodoSlice';
// localStorage.clear()

export function Todo() {
  let [list, setList] = useState('');
  let theme = useOutletContext();
  let arr = useSelector((state) => state.toDo)
  return (
    <>
      <section className={s.container}>
        <div>
          <h1 className={theme ? s.dark : s.white}>TODO LIST</h1>
        </div>
        {/* {arr.map((item) => {
          return <li key={item.id}>{item.text} <button onClick={() => disp(handleDelite(item.id))}>Delete</button></li>
        })} */}

        <Input
          list={list}
          setList={setList}
          theme={theme}
        />
        <Tasks
          arr={arr}
          theme={theme}
        />
      </section>
    </>
  )
}
