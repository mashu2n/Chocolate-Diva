import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {
   

    render() {
        const directory = this.props.items.map(item => {
            return (
                <div key={item.id} className="col-md-4 m-1">
                    <Card onClick={() => this.props.onClick(item.id)}>
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
            </div>
        );
    }
}

export default Directory;