import React from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap'
import One from "../../assets/one.jpg"

const About = () => {
  return (
   <section>
        <Container>
            <Row>
                <Col lg={4}>
                   <div className="">
                        <img className="amiii" src={One} alt="" />
                        <h3>Lifetime Support</h3>
                        <p>Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24-hour service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>
                   </div>
                </Col>
                <Col lg={4}>
                   <div className="">
                        <img className="amiii" src={One} alt="" />
                        <h3>Lifetime Support</h3>
                        <p>Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24-hour service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>
                   </div>
                </Col>
                <Col lg={4}>
                   <div className="">
                        <img className="amiii" src={One} alt="" />
                        <h3>Lifetime Support</h3>
                        <p>Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24-hour service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>
                   </div>
                </Col>
            </Row>
        </Container>
   </section>
  )
}

export default About