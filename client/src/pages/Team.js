import React from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";

const Team = () =>
    <Container fluid>
        <Row>
            <Col size="md-12">
                <Jumbotron>
                    <h1>Meet Our Team</h1>
                </Jumbotron>
                <Row>
                    <Col size="md-12">
                    <Nav />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-8">

                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>

export default Team;