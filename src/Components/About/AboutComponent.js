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
                            Hello, my name is Linus, a Site Reliability Engineer from Hamburg. I hold a Bachelor's degree in Applied Computer Science from Flensburg University. During my studies, I interned at Zenner IoT Solutions in Hamburg, where I was introduced to DevOps and automation. As a member of the DevOps team, I managed all VMs and maintained docker swarm setups, utilizing various tools such as Gitlab CI/CD, Ansible, Nginx, and Graylog for logging. I also set up a k3s Kubernetes cluster and wrote my thesis on "Comparing Docker Swarm to Kubernetes in Preparation of Migration Projects." After completing my degree, I continued to work at Zenner IoT Solutions before moving to German Edge Cloud, where I currently work as an SRE, helping development teams deploy with greater frequency and reliability while minimizing service interruptions. Since I have not maintained this Website in a while you can currently only find old university projects here. You can find them under projects with pictures and short descriptions for each of them.
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
