import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form, Col, PageHeader } from "react-bootstrap";


class FormCategory extends Component {
    state = {
        name: '',
        description: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addCategory(this.state);
        this.setState({name: '', description: ''});
    };

    render(){
        return <div>
            <PageHeader>
              {this.props.formTitle}
            </PageHeader>
            <Form onSubmit={this.handleSubmit}>
              <Col sm={6} smOffset={3}>
                <FormGroup>
                  <FormControl type="text" placeholder="Entrer le nom" value={this.state.name} onChange={event => this.setState(
                        { name: event.target.value }
                      )} />
                </FormGroup>
              </Col>
              <Col sm={6} smOffset={3}>
                <FormGroup>
                  <FormControl componentClass="textarea" placeholder="Description" value={this.state.description} onChange={event => this.setState(
                        { description: event.target.value }
                      )} />
                </FormGroup>
              </Col>
              <Col sm={6} smOffset={3}>
                <Button bsStyle="success" type="submit">
                  Ajouter
                </Button>
              </Col>
            </Form>
          </div>;
    }
}

export default FormCategory;