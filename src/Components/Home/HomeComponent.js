import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import SurfImage from '../../Images/surf.jpeg'
import { Container, Row, Col } from 'react-bootstrap'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className='imageContainer'>
                <Container>
                    <Row className='dark flexColumn'>
                        <h4 className='centerText pdTop'>
                            Welcome to my Website!
                        </h4>
                        <span className='centerSpan pdTop'>
                            Hello, my name is Linus, a Site Reliability Engineer from Hamburg. Since I have not maintained this Website in a while you can currently only find old university projects here alongside more information about me.
                        </span>
                    </Row>
                    <Row className='pdTop pdBot'>
                        <Col xs={20} className='max60'>
                            <Image src={SurfImage} className='max100' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
