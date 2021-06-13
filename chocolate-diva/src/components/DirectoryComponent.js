import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedItem: null  
        };
    }

    onItemSelect(item) {
        this.setState({SelectedItem: item})
    }

    renderSelectedItem(item) {
        if(item) {
            return (
                <Card>
                    <CardImg top src={item.image} alt={item.foodItem} />
                    <CardBody>
                        <CardTitle>{item.foodItem}</CardTitle>
                        <CardText>{item.foodItem}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.items.map(item => {
            return (
                <div key={item.id} className="col-md-4 m-1">
                    <Card onClick ={() => this.onItemSelect(item)}>
                        <CardImg width="100%" src={item.image} alt={item.foodItem} />
                        <CardImgOverlay>
                            <CardTitle>{item.foodItem}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-4 m-1">
                        {this.renderSelectedItem(this.state.SelectedItem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;