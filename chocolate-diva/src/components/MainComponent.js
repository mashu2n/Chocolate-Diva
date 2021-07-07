import React, { Component } from 'react';
import { ITEMS } from '../shared/items';
import Header from './HeaderComponent'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ITEMS,
            selectedItem: null
        };
    }

    onItemSelect(itemId) {
        this.setState({selectedItem: itemId});
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    };
}

export default Main;