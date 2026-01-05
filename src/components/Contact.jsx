import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import './Contact.css';

import SectionReveal from './SectionReveal';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact-section">
            <Container>
                <SectionReveal>
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <Row className="justify-content-center text-center mt-4">
                        <Col md={8}>
                            <div className="contact-info d-flex justify-content-center gap-4 flex-wrap">
                                <a href="mailto:eslam9779@gmail.com" className="contact-card">
                                    <div className="icon-box">
                                        <FaEnvelope />
                                    </div>
                                    <h3>{t('contact.email')}</h3>
                                    <p>eslam9779@gmail.com</p>
                                </a>

                                <div className="contact-card">
                                    <div className="icon-box">
                                        <FaPhoneAlt />
                                    </div>
                                    <h3>{t('contact.phone')}</h3>
                                    <p dir='ltr'>(+20) 01017392616</p>
                                </div>

                                <div className="contact-card">
                                    <div className="icon-box">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h3>{t('contact.address')}</h3>
                                    <p>{t("contact.addressDetails")}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center mt-4">
                        <Col md={8}>
                            <div className="contact-links d-flex justify-content-center gap-4 flex-wrap">


                                <div>
                                    <a href="https://www.linkedin.com/in/eslam-abd-elsattar-aa110b164/" target="_blank" rel="noreferrer" className="contact-card">
                                        <div className="icon-box">
                                            <FaLinkedin />
                                        </div>
                                        <h3>{t('contact.linkedin')}</h3>
                                        <p>{t("contact.LinkedIn_Profile")}</p>
                                    </a>
                                </div>

                                <a href="https://github.com/eslam9779" target="_blank" rel="noreferrer" className="contact-card">
                                    <div className="icon-box">
                                        <FaGithub />
                                    </div>
                                    <h3>{t('contact.github')}</h3>
                                    <p>{t("contact.GitHub_Profile")}</p>
                                </a>
                                <a href="https://www.facebook.com/eslam.abdo.50" target="_blank" rel="noreferrer" className="contact-card">
                                    <div className="icon-box">
                                        <FaFacebook />
                                    </div>
                                    <h3>{t('contact.facebook')}</h3>
                                    <p>{t("contact.Facebook_Profile")}</p>
                                </a>
                            </div>
                        </Col>
                    </Row>

                </SectionReveal>
            </Container>
        </section>
    );
};


export default Contact;
