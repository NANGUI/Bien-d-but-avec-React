import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Category = (props)=> {
    return <ListGroupItem key={props.data.id}>
        {props.data.name} - {props.data.description}
      </ListGroupItem>;
}; 


export default Category;