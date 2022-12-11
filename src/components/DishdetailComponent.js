import React from "react";
import { Card, CardImg, CardImgOverlay, CardGroup, CardText, CardBody, CardTitle } from 'reactstrap'


function RenderDish({dish}) {
    return (<Card className="col-md-5 col-12">
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>)
}
function RenderComments({dish}) {
    return (<Card className="col-12 col-md-5">
        <CardTitle tag="h3">Comments</CardTitle>
        <CardText>{dish.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <CardText>{comment.comment}</CardText>
                    <CardText>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText>
                </div>
            );
        })}
        </CardText>
    </Card>)
}
        
const DishDetail = (props) => {
        if(props.dish != null) {
            return(
                <CardGroup key={props.dish.id} className="col-12 m-auto">
                    <RenderDish dish={props.dish} />
                    <RenderComments dish={props.dish} />
                </CardGroup>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

export default DishDetail