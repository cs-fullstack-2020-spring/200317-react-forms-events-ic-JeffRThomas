import React, {Component} from 'react';
import Header from './Header';
import RecipeDisplay from './RecipeDisplay';
import RecipeForm from './RecipeForm';

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state={};
    };

    render(){
        return(
            <div>
                <p>"I am the AppContainer component"</p>
                <Header/>
                <RecipeDisplay/>
                <RecipeForm/>
            </div>
        )
    };
};

export default AppContainer;