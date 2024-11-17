import { createSlice } from "@reduxjs/toolkit";

let arrStore = JSON.parse(localStorage.getItem('arr')) || [];

let toDoSlice = createSlice({
    name: 'Todo',
    initialState: arrStore,
    reducers: {
        handleAdd: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('arr', JSON.stringify(state))
        },
        handleDelite: (state, action) => {
            let copy = state.filter(elem => elem.id !== action.payload)
            localStorage.setItem('arr', JSON.stringify(copy))
            return copy
        },
        handleTogle: (state, action) => {
            let copy = state.map(item => item.id == action.payload ? { ...item, isEdit: !item.isEdit } : item)
            localStorage.setItem('arr', JSON.stringify(copy))
            return copy
        },
        handleTogleCheck: (state, action) => {
            let copy = state.map(item => item.id == action.payload ? { ...item, isChecked: !item.isChecked } : item)
            localStorage.setItem('arr', JSON.stringify(copy))
            return copy
        },
        handleEdit: (state, action) => {
            let str = JSON.stringify(copy)
            localStorage.setItem('arr', str)
        }
    }
})

export default toDoSlice.reducer

export const { handleAdd, handleDelite, handleTogle, handleTogleCheck, handleEdit } = toDoSlice.actions