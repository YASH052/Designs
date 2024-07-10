    import React, { useState } from "react";
    import { Col, Container, Row, Card } from "react-bootstrap";
    import PieChart from "./PieChart";
    import Stackedchart from "./Stackedchart";
    import Issuestatewisechart from "./Issuestatewisechart";
    import '../Pages/Dashboard.css';
    import DatePicker from "react-datepicker";
    import Barchart from "./Barchart";
    import "react-datepicker/dist/react-datepicker.css";
    const Dashboard = () => {
        const [selectedState, setSelectedState] = useState('');
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
        const indianStates = [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
            'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
            'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
            'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
            'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
            'West Bengal'
        ];

        const handleChange = (event) => {
            setSelectedState(event.target.value);
        };

        return (
            <Container fluid>
                <Row>
                    <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi voluptate odio numquam, quis nulla, ullam eligendi perspiciatis laborum voluptas placeat debitis quos cupiditate similique quia, dolor blanditiis tempore sit?
                    </Col>
                    <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
                        <Row className="ms-0">Header</Row>
                        <Row className="ms-0 app-repairdashboard">Repair Dashboard</Row>
                        <hr />
                        <Row className="mt-2">
                            <Col lg={3} md={3}>
                                <Col className="app-dates">From date :<span className="app-compulsory">*</span></Col>
                                <Col className=""><DatePicker selected={startDate} onChange={(sdate) => setStartDate(sdate)} dateFormat="dd/MM/yyyy" /></Col>
                            </Col>
                            <Col lg={3} md={3}>
                                <Col className="app-dates">To date :<span className="app-compulsory">*</span></Col>
                                <Row className="ms-0">  <DatePicker
                                    selected={endDate}
                                    onChange={(edate) => setEndDate(edate)}
                                    dateFormat="dd/MM/yyyy"
                                /></Row>
                            </Col>
                            <Col lg={3} md={3}>
                                <Col className="app-dates">State :</Col>
                                <Col>
                                    <select id="states" value={selectedState} onChange={handleChange}>
                                        <option value="" disabled>Select a state</option>
                                        {indianStates.map((state, index) => (
                                            <option key={index} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                </Col>
                            </Col>
                            <Col lg={3} md={3} className="mt-4 text-end">
                                <span className="app-search">Search</span>
                            </Col>
                        </Row>
                        <Row className="app-calls-box mt-3 me-1 ms-0">
                            <Row className="ms-0 mt-2">Calls</Row>
                            <Row className="mt-3 ms-0 mb-2">
                                <Col lg={1} className="app-box1 me-4">
                                    <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center align-items-center d-flex app-boxh">total</Row>
                                </Col>
                                <Col lg={1} className="app-box2 me-4">
                                    <Row className="align-items-center justify-content-center ">3</Row>
                                    <Row className="text-center app-boxh">Closed at call center</Row>
                                </Col>
                                <Col lg={1} className="app-box3 me-4">
                                    <Row className="align-items-center justify-content-center  mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">Jobs closed</Row>
                                </Col>
                                <Col lg={1} className="app-box4 me-4">
                                    <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">Not Attended</Row>
                                </Col>
                                <Col lg={1} className="app-box5 me-4">
                                    <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">Not Available</Row>
                                </Col>
                                <Col lg={1} className="app-box6 me-4">
                                    <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">Part Pending</Row>
                                </Col>
                                <Col lg={1} className="app-box7 me-4">
                                    <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">PostPoned</Row>
                                </Col>
                            </Row>
                        </Row>
                        <Row className="mt-4">
                            <Col className="app-piechartscol">
                                <Card className="app-cards me-2">
                                    <Card.Body><PieChart /></Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="app-cards me-2">
                                    <Card.Body><Issuestatewisechart/></Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <Card className="app-cards me-2"><Card.Body><Barchart /></Card.Body></Card>
                            </Col>
                            <Col>
                                <Card className="app-cards me-2">
                                    <Card.Body><Stackedchart/></Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        );
    };

    export default Dashboard;
