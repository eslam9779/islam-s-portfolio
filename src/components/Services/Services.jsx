import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { SiAntdesign, SiPrime } from 'react-icons/si';
import './Services.css';

import SectionReveal from '../SectionReveal/SectionReveal';

const Services = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="services-section">
            <Container>
                <SectionReveal>
                    <h2 className="section-title text-center mb-5">{t('techStats.title')}</h2>

                    <Row className="justify-content-center mb-5">
                        <Col lg={10}>
                            <div className="tech-grid">
                                <div className="tech-item"><FaHtml5 color="#E34F26" /><span>HTML5</span></div>
                                <div className="tech-item"><FaCss3Alt color="#1572B6" /><span>CSS3</span></div>
                                <div className="tech-item"><FaJs color="#F7DF1E" /><span>JavaScript</span></div>
                                <div className="tech-item"><FaBootstrap color="#7952B3" /><span>Bootstrap</span></div>
                                <div className="tech-item"><FaReact color="#61DAFB" /><span>React</span></div>

                                <div className="tech-item"><SiPrime color="#06B6D4" /><span>PrimeReact</span></div>
                                <div className="tech-item"><SiAntdesign color="#1890FF" /><span>Ant Design</span></div>
                                <div className="tech-item"><FaDatabase color="#eee" /><span>SQL</span></div>
                                <div className="tech-item"><FaPhp color="#777BB4" /><span>PHP</span></div>
                                <div className="tech-item"><FaLaravel color="#FF2D20" /><span>Laravel</span></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md={3} className="mb-4">
                            <div className="stat-card">
                                <h3>15+</h3>
                                <p>{t('techStats.projects')}</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="stat-card">
                                <h3>10+</h3>
                                <p>{t('techStats.clients')}</p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-card">
                                <h3>24/7</h3>
                                <p>{t('techStats.support')}</p>
                            </div>
                        </Col>
                    </Row>
                </SectionReveal>
            </Container>
        </section>
    );
};

export default Services;
