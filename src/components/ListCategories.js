import React from 'react';
import { Col, PageHeader, FormGroup } from 'react-bootstrap';

import Category from './Category';

const ListCategories = (props) => {
    return <div>
        <Col sm={12}>
          <PageHeader>Liste de Categories</PageHeader>
          <FormGroup>
            {
                props.categories.map(category => <Category data={category} key={category.id} /> )
            }
          </FormGroup>
        </Col>
      </div>;
};

export default ListCategories; 