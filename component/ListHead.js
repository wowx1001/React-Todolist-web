import React from 'react';
import styled from 'styled-components';

import {useTodoState} from './TodoContext.js';


const ListHeadBlock=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    background-color: #38d9a9;
    height: 76px;
    padding-top: 16px;
    padding-left: 16px;
    font-family: 'Nanum Gothic', sans-serif;
    color:white;
    border-radius: 20px 20px 0 0;
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
        text-align:center;
      }
`;


const ListHead = ()=>{
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    console.log(todos);
    return(
        <ListHeadBlock>
            <h1>{dateString}</h1>
            <div className="tasks-left">-할 일 {undoneTasks.length}개 남음-</div>
        </ListHeadBlock>
    );
}
export default ListHead;