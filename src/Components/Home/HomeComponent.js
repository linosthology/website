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
                            Hi there, nice to meet you.
                            My name is Linus and I'm a Site Reliability Engineer based in Hamburg.
                            On my website, you can find some projects I have been working on during university as well as my resume.
                            Have a look around and if you have any questions, please feel free to reach out.
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
