import React from 'react';
import styled from 'styled-components';
import ListHead from './ListHead';
import ListItems from './ListItems';
import CreateItem from './CreateItems';

function ListTemplate(){
    const ListTemplate = styled.div`
    width: 460px;
    height: 720px;
    background:#f2f3f59e;
    margin: 0 auto;
    box-shadow: 0 1px 16px lightgrey;
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    `;
    return(
        <ListTemplate>
            <ListHead></ListHead>
            <ListItems></ListItems>
            <CreateItem></CreateItem>
        </ListTemplate>
    );
}
export default ListTemplate;