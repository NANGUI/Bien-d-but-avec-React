import React from 'react';
import { Col, PageHeader, FormGroup, ListGroupItem, Checkbox } from 'react-bootstrap';

const ListCategories = (props) => {
    return <div>
        <Col sm={12}>
          <PageHeader>Liste de Categories</PageHeader>
          <FormGroup>
            {
                props.categories.map(category => 
                  <ListGroupItem key={category.id}>
                    {category.name} - {category.description}
                  </ListGroupItem>
                )
            }
          </FormGroup>
        </Col>
      </div>;
};

export default ListCategories; 