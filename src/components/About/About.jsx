import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';
import SectionReveal from '../SectionReveal/SectionReveal';


const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="about-section">
            <Container>
                <SectionReveal>
                    <Row className="justify-content-center">
                        {/* Text Content */}
                        <Col lg={8} className="mb-5 text-center">
                            <div className="about-text-content">
                                <h2 className="section-title">{t('about.title')}</h2>
                                {/* <h3 className="text-accent mb-4">Who I Am</h3> */}
                                <p className="about-description text-center">
                                    {t('about.intro')}
                                </p>
                            </div>
                        </Col>

                        {/* Bento Grid Cards */}
                        <Col lg={12}>
                            <div className="bento-grid">
                                {/* Education Card */}
                                <div className="bento-card education-card">
                                    <div className="card-icon">
                                        <FaGraduationCap />
                                    </div>
                                    <div className="card-content">
                                        <h4>{t('about.education.title')}</h4>
                                        <div className="milestone">
                                            <span className="year">2015-2019</span>
                                            <span className="degree">{t('about.education.bachelor')}</span>
                                        </div>
                                        <div className="milestone">
                                            <span className="year">2022-2023</span>
                                            <span className="degree">{t('about.education.iti')}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Experience Card */}
                                <div className="bento-card experience-card">
                                    <div className="card-icon">
                                        <FaBriefcase />
                                    </div>
                                    <div className="card-content">
                                        <h4>{t('about.experience.title')}</h4>
                                        <div className="milestone">
                                            <span className="year">2023 - {t("about.present")}</span>
                                            <span className="role">{t('about.experience.current')}</span>
                                        </div>
                                        <div className="milestone mt-3">
                                            <span className="year">2025 - {t("about.present")}</span>
                                            <span className="role">{t('about.experience.scyiber')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SectionReveal>
            </Container>
        </section>
    );
};

export default About;
