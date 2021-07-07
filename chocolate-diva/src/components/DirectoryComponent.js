import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({item, onClick}) {
    return (
        <Card onClick={() => onClick(item.id)}>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {
   
        const directory = props.items.map(item => {
            return (
                <div key={item.id} className="col-md-4 m-1">
                    <RenderDirectoryItem item={item} onClick={props.onClick} />
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

export default Directory;