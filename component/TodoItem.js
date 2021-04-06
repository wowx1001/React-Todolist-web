import React from 'react';
import styled,{ css } from 'styled-components';
import {MdDelete,MdDone} from "react-icons/md";
import {useTodoDispatch} from "./TodoContext.js";

const RemoveIconBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;    
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
    }
    display: none;
`;

const ItemBlock = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    &:hover {
        ${RemoveIconBlock}{
            display:inherit;
        }
    }
`;

const Text = styled.div`
    font-size:21px;
    width:270px;
    ${props =>
        props.done&&css`
        color:#bdbebd;
        text-decoration:line-through;
    `
    }
`;

const CheckBox = styled.div`
    width:32px;
    height:32px;
    border: 2px solid black;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done&&css`
        border: 2px solid #20c997;
        color:#20c997;
    `
    }
`; 


const ListItems = ({id, done, text})=>{
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type:"TOGGLE",id});
    const onRemove = () => dispatch({type:"REMOVE",id});
    return(
        <ItemBlock>
            <CheckBox done={done} onClick={onToggle}>
                {done && <MdDone size="32"/>}
            </CheckBox>
            <Text done={done}>{text}</Text>
            <RemoveIconBlock onClick={onRemove}>
                <MdDelete></MdDelete>
            </RemoveIconBlock>
        </ItemBlock>
    );
}

export default React.memo(ListItems);