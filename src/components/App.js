import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormCategory from './FormCategory';
import ListCategories from './ListCategories';

class App extends Component {

    state = {
        categories: []
    };

    // addCategory = (category) => {
    //     let oldCategories = this.state.categories;
    //     category.id = uuid();
    //     let newCategories = [...oldCategories, category];
    //     this.setState({categories: newCategories});
    // };

    // addCategory = (category) => {
    //     // this.props.dispatch({type: 'ADD_CATEGORY', payload: category});
    //     this.props.addCategory(category);
    // };

    render(){
        return <div>
            <h3>Liste des categories</h3>
            <FormCategory formTitle="Ajouter des catégories" addCategory={this.props.addCategory} />
            <ListCategories categories={this.props.categories} />
          </div>;
    }
} // End Class

const addCategoryActionCreator = (category) => {
    return {
        type: 'ADD_CATEGORY',
        payload: category
    }
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category) => {
            dispatch(addCategoryActionCreator(category));
        }
    }
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);