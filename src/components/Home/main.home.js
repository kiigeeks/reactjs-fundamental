import React from "react";
import { Card } from "react-bootstrap";
import './home.css';

//child component
const Home = (props) => {
    return (
        <React.Fragment >
            <div className="gbr"></div>
            <div className="mt-3 row justify-content-center text-center">
                <Card className="shadow-lg p-3 mb-2 bg-body rounded" style={{ width: "30em" }}>
                    <Card.Body><h1>Special Thanks To </h1><h1>Dea Afrizal  & Team 🥳</h1></Card.Body>
                </Card>
            </div>
        </React.Fragment>
    )
    
}

export default Home;