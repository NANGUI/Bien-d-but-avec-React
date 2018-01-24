import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

class Category extends React.Component {

    state = {isInEditMode: false};

    toggleEditMode = () => {
        this.setState({isInEditMode: !this.state.isInEditMode});
    };

    handleNameEdit = (event, category) => {
        category.name = event.target.value;
        this.props.editCategory(category);
    };

    handleDescriptionEdit = (event, category) => {
        category.description = event.target.value;
        this.props.editCategory(category);
    };

    render() {
        return <ListGroupItem key={this.props.data.id}>
            <Button bsClass="btn-warning bnt-xs" onClick={() => this.toggleEditMode()}>
              {!this.state.isInEditMode ? <span>
                  Editer
                </span> : <span>Sauvegarder</span>}
            </Button>
            {this.state.isInEditMode ? <span>
                &nbsp; <input type="text" value={this.props.data.name} onChange={event => this.handleNameEdit(event, this.props.data)} />&nbsp;
                <input type="text" value={this.props.data.description} onChange={event => this.handleDescriptionEdit(event, this.props.data)} />
              </span> : <span>
                &nbsp; {this.props.data.name} - {this.props.data.description}
              </span>}
          </ListGroupItem>;
    }
}

export default Category;