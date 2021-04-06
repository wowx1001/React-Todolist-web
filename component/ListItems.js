import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem.js';
import {useTodoState} from './TodoContext';


const ListBlock = styled.ul`
    width: 360px;
    height: 360px;
    margin: 50px 50px;
    list-style: none;
    padding: 0;
    overflow-y: auto;
`;

const ListItems = ()=>{
    const todos = useTodoState();
    return(
        <ListBlock>
            {todos.map(item=>(
             <TodoItem
                key={item.id}
                id={item.id}
                text={item.text}
                done={item.done}
             >
             </TodoItem>
            ))}
        </ListBlock>
    );
}

export default ListItems;