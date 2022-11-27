import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardGroup, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const dish = this.props.dish;
        const comments = this.props.comments;
        if(dish!=null) {
            return(
                <CardGroup key={dish.id} className="col-12 m-auto">
                    <Card className="col-md-5 col-12">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <Card className="col-12 col-md-5">
                        <CardTitle tag="h3">Commetns</CardTitle>
                        <CardText>{comments.comments.map((comment) => {
                            return (
                                <>
                                    <CardText>{comment.comment}</CardText>
                                    <CardText>--{comment.author}</CardText>
                                </>
                            );
                        })}
                        </CardText>
                    </Card>
                </CardGroup>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail