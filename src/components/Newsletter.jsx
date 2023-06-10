import { Alert } from "react-bootstrap";
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";

const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] =  useState("");

    useEffect(() => {
        if  (status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email && email.indexOf("0") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const  clearFields = () => {
        setEmail('');
    }

    return (  
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Got a Job? Contact Me.</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}                        
                    </Col>                    
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input type="email"value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Emaii Address"/>
                                <button type="submit">Submiit</button></div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}
 
export default Newsletter;