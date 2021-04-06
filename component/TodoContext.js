import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodo = [
    {
        id:1,
        text: '할일 목록1',
        done: true
    },
    {
        id:2,
        text: '할일 목록2',
        done: true
    },
    {
        id:3,
        text: '할일 목록3',
        done: true
    },
    {
        id:4,
        text: '할일 목록4',
        done: true
    },
];

const todoReducer = (state, action)=>{
    switch (action.type){
        case 'ADD':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo=>
                todo.id === action.id ? {...todo, done:!todo.done}:todo
            );
        case 'REMOVE':
            return state.filter(todo=>todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodo);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export const useTodoState = () => {
    return useContext(TodoStateContext);
}

export const useTodoDispatch = () => {
    return useContext(TodoDispatchContext);
}

export const useTodoNextId = () => {
    return useContext(TodoNextIdContext);
}