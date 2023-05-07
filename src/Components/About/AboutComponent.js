/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import HeadshotImage from '../../Images/headshot.jpg'

export default class AboutComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='dark flexColumn'>
                        <h4 className='centerText pdTop'>About</h4>
                        <span className='centerSpan pdTop'>
                            Born and raised in Hamburg, I stayed true to the north and decided to study Applied Computer Science in Flensburg which I finished with a Bachelor of Science in 2021.
                            During my studies, my focus has been on IoT which is why I interned at Zenner IoT Solutions in Hamburg.
                            There I got introduced to DevOps and automation. As a member of the DevOps team, I managed all VMs and maintained docker swarm setups, utilizing various tools such as Gitlab CI/CD, Ansible, Nginx, as well as Graylog for logging alongside many others.
                            During my time as an intern, I set up a k3s kubernetes cluster as well, which raised my interest in container orchestration further.
                            Because of that I decided to write my thesis on "Comparing Docker Swarm to Kubernetes in Preparation of Migration Projects." about this topic.
                            After finishing my bachelors, I continued to work at Zenner IoT Solutions before starting at German Edge Cloud.
                            Here I currently work as an SRE supporting development teams in deploying with greater frequency and reliability while minimizing service interruptions.
                            On a personal level, my passion is surfing, which offers me the best balance between the IT world and nature.
                        </span>
                    </Row>
                    <Row className='pdTop'>
                        <Col xs={20} className='max60'>
                            <Image src={HeadshotImage} className='max100' />
                        </Col>
                    </Row>
                    <Row>
                        <div className='flexRow center pdTop pdBot'>
                            <div>
                                <a
                                    href='mailto:linus.frotscher@gmail.com'
                                    className='fas fa-envelope widthPadding icons nostyle'
                                ></a>
                            </div>
                            <div>
                                <a
                                    href='https://github.com/linusfr'
                                    className='fab fa-github widthPadding icons nostyle'
                                    target='_blank'
                                ></a>
                            </div>
                            <div>
                                <a
                                    href='https://www.linkedin.com/in/linusfrotscher/'
                                    className='fab fa-linkedin widthPadding icons nostyle'
                                    target='_blank'
                                ></a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
