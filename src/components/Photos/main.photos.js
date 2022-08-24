import React from "react";
import Collection from "./collection.photos";
import { Container } from "react-bootstrap";

//child component
const Photos = (props) => {
    return (
        <React.Fragment>
            <Container className="mt-2">
                <Collection></Collection>
            </Container>
        </React.Fragment>
    )
}

export default Photos;