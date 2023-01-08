import React from "react";
import { Card, CardImg, CardGroup, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from "react-router-dom";


function RenderDish({ dish }) {
    if(dish != null)
    return (
        <Card className="col-md-5 col-12">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
    else
    return(
        <div></div>
    )
}
function RenderComments({ comments }) {
    if(comments != null)
    return (
        <Card className="col-12 col-md-5">
            <CardTitle tag="h3">Comments</CardTitle>
            <CardText>{comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <CardText>{comment.comment}</CardText>
                        <CardText>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</CardText>
                    </div>
                );
            })}
            </CardText>
        </Card>
    );
    else
    return(
        <div></div>
    )
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <CardGroup key={props.dish.id} className="col-12 m-auto">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </CardGroup>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

export default DishDetail