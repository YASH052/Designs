import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./Login.css";
import { useState } from "react";

const Login = () => {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setflag] = useState(1);

    const handlesubmit = () => {
        console.log(number, password);
    };

    return (
        <div className="main">
            <div className="header">
                <div className="content">
                    <div className="wlcm">Welcome, login</div>
                    <div className="brands">Empowering individuals and brands</div>
                </div>
                <div className="btnn">
                    <div className="two">
                        <div
                            className="influ"
                            onClick={() => {
                                setflag(1);
                            }}
                        >
                            I am an influencer
                        </div>
                        <div
                            className="brand"
                            onClick={() => {
                                setflag(2);
                            }}
                        >
                            Brand
                        </div>
                    </div>
                    <div className="number">{flag}/2</div>
                </div>
            </div>
            <div className="center">
                <input
                    className="phone"
                    type="input"
                    placeholder="Enter phone number"
                    name="phone_number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <div className="psw">
                    <input
                        className="pass"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <a className="fp" href="https://www.google.com">
                Forgot password
            </a>
            <button className="login" onClick={handlesubmit}>
                Login
            </button>
        </div>
    );
};

export default Login;

