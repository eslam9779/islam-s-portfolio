import React from 'react';
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import cvFile from '../assets/islam Abelsattar resume.pdf';
import islam2 from '../assets/3.png';
import './Hero.css';

import SectionReveal from './SectionReveal';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero-section d-flex align-items-center">
            <Container>
                <SectionReveal>
                    <Row className="align-items-center">
                        <Col lg={6} className="hero-content">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="greeting text-accent">{t('hero.greeting')}</h3>
                                <h1 className="name">React Developer</h1>
                                <h2 className="title">{t('hero.title')}</h2>
                                <p className="description">{t('hero.description')}</p>

                                <div className="cta-container d-flex align-items-center gap-4 mt-4">
                                    <a href={cvFile} download="islam Abelsattar resume.pdf">
                                        <Button className="btn-primary-custom">
                                            {t('header.downloadCv')} <FaFileDownload className="ms-2" />
                                        </Button>
                                    </a>
                                    <div className="social-links d-flex gap-3">
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="github-tooltip">{t('hero.github')}</Tooltip>}
                                        >
                                            <a href="https://github.com/eslam9779" target="_blank" rel="noreferrer" className="social-icon github">
                                                <FaGithub />
                                            </a>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="linkedin-tooltip">{t('hero.linkedin')}</Tooltip>}
                                        >
                                            <a href="https://www.linkedin.com/in/eslam-abd-elsattar-aa110b164/" target="_blank" rel="noreferrer" className="social-icon linkedin">
                                                <FaLinkedin />
                                            </a>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={6} className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hero-image-wrapper"
                            >
                                <div className="hero-blob"></div>
                                <img
                                    src={islam2}
                                    alt="Profile"
                                    className="profile-img "
                                />
                            </motion.div>
                        </Col>
                    </Row>
                </SectionReveal>
            </Container>
        </section>
    );
};

export default Hero;
