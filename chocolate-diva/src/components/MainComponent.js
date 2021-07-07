import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { ITEMS } from '../shared/items';
import ItemInfo from './ItemInfoComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'

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
                <Directory items={this.state.items} onClick={itemId => this.onItemSelect(itemId)}/>
                <ItemInfo item={this.state.items.filter(item => item.id === this.state.selectedItem)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;