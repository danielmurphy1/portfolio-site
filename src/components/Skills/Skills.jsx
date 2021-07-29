import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Skills = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={4} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} bottom duration={1000} delay={600} distance="30px">
              <div className="skills-wrapper__info">
                <ul className="skills-wrapper__info-text list list-group">Front-End
                    <li className="list-item">HTML/CSS</li>
                    <li className="list-item">JavaScript</li>
                    <li className="list-item">React</li>
                    <li className="list-item">Bootstrap</li>
                </ul>
              </div>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="skills-wrapper__info">
                <ul className="skills-wrapper__info-text list list-group">Back-End
                    <li className="list-item">Node</li>
                    <li className="list-item">Express</li>
                    <li className="list-item">RESTful APIs</li>
                    <li className="list-item">SQL/PostgreSQL</li>
                </ul>
              </div>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="skills-wrapper__info">
                <ul className="skills-wrapper__info-text list list-group">Technologies/Tools
                    <li className="list-item">Postman</li>
                    <li className="list-item">Git/GitHub</li>
                    <li className="list-item">Heroku</li>
                    <li className="list-item">Netlify</li>
                    <li className="list-item">JSON Web Token</li>
                </ul>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;