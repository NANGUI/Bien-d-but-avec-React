import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';

import FormCategory from './FormCategory';
import ListCategories from './ListCategories';

class App extends Component {

    state = {
        categories: []
    };

    addCategory = (category) => {
        let oldCategories = this.state.categories;
        category.id = uuid();
        let newCategories = [...oldCategories, category];
        this.setState({categories: newCategories});
    };

    render(){
        return <div>
            <h3>Liste des categories</h3>
            <FormCategory formTitle="Ajouter des catégories" addCategory={this.addCategory} />
            <ListCategories categories={this.state.categories} />
          </div>;
    }
} // End Class

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

// export default App;
export default connect(mapStateToProps)(App);