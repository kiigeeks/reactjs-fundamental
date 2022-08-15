import React from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.posts";

//child component
const Posts = (props) => {
    return (
        <React.Fragment>
            <Container className="mt-2">
                <Collection></Collection>
            </Container>
        </React.Fragment>
    )
}

export default Posts;