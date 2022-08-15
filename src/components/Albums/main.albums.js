import React from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.albums";

//child component
const Albums = (props) => {
    return (
        <React.Fragment>
            <Container className="mt-2">
                <Collection></Collection>
            </Container>
        </React.Fragment>
    )
}

export default Albums;