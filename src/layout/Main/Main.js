import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <>
            <Container>
            <Row>
                <Col lg='2'><LeftSideNav></LeftSideNav></Col>
                <Col lg='7'><Outlet></Outlet></Col>
                <Col lg='3'><RightSideNav></RightSideNav></Col>
            </Row>
            </Container>
        </>
    );
};

export default Main;