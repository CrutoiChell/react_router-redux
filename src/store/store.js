import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../Components/TodoList/TodoSlice'
export default configureStore({
    reducer: {
        toDo: toDoReducer
    }
})
