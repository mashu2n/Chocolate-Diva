import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ITEMS } from '../shared/items';

function RenderItem({item}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={ITEMS.image} alt={ITEMS.name} />
                <CardBody>
                    <CardTitle>{ITEMS.name}</CardTitle>
                    <CardText>{ITEMS.foodItem}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map(comment => {
                    return(
                        <div key={comment.id}>
                            <p>'Rating:' {comment.rating}<br />
                                'Comment:' {comment.text}<br />
                            --{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: "short", day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                            </div>
                    );
                })}
            </div>
        );
    }
    return <div />
}
function ItemInfo(props) {
    if (props.item) {
        return (
            <div className="container">
                <div className="row">
                    <RenderItem item={props.ITEMS} />
                    <RenderComments comments={props.item.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default ItemInfo;