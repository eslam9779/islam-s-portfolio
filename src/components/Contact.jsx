import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact-section">
            <Container>
                <h2 className="section-title">{t('contact.title')}</h2>
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <div className="contact-links d-flex justify-content-center gap-4 flex-wrap">
                            <a href="mailto:example@email.com" className="contact-card">
                                <div className="icon-box">
                                    <FaEnvelope />
                                </div>
                                <h3>{t('contact.email')}</h3>
                                <p>email@example.com</p>
                            </a>

                            <div className="contact-card">
                                <div className="icon-box">
                                    <FaPhoneAlt />
                                </div>
                                <h3>Phone</h3>
                                <p>+123 456 7890</p>
                            </div>

                            <div className="contact-card">
                                <div className="icon-box">
                                    <FaMapMarkerAlt />
                                </div>
                                <h3>Address</h3>
                                <p>Cairo, Egypt</p>
                            </div>

                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-card">
                                <div className="icon-box">
                                    <FaLinkedin />
                                </div>
                                <h3>{t('contact.linkedin')}</h3>
                                <p>LinkedIn Profile</p>
                            </a>

                            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-card">
                                <div className="icon-box">
                                    <FaGithub />
                                </div>
                                <h3>{t('contact.github')}</h3>
                                <p>GitHub Profile</p>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="footer py-4 text-center">
            <Container>
                {/* Copyright removed as per request */}
            </Container>
        </footer>
    );
};

export default Contact;
