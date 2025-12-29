import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import gptImg from '../assets/gpt.png';
import afedny from '../assets/afedny.png';
import bareq from '../assets/bareq.png';

import awqaty from '../assets/awqaty.png';
import kalemon from '../assets/kalemon.png';
import tebian from '../assets/tebian.png';

import './Projects.css';

import SectionReveal from './SectionReveal';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            key: 'bareq',
            tech: ['React', 'React Bootstrap', 'Ant Design'],
            color: '#0ea5e9',
            link: 'https://bareq.me/',
            code: '',
            image: bareq,

        },
        {
            key: 'tebian',
            tech: ['React', 'PrimeReact'],
            color: '#4f46e5',
            link: 'https://tebian.app/',
            code: '',
            image: tebian,

        },
        {
            key: 'awqaty',
            tech: ['Laravel Blade', 'Bootstrap 5'],
            color: '#10b981',
            link: 'https://www.awqaty.com/ar',
            code: '',
            image: awqaty,

        },
        {
            key: 'afedny',
            tech: ['Laravel Blade', 'Bootstrap 5'],
            color: '#ef4444',
            link: 'https://bo.afedne.com/',
            code: '',
            image: afedny,

        },
        {
            key: 'gpt3',
            tech: ['React', 'CSS'],
            image: gptImg,
            link: 'https://exquisite-marigold-dd26ed.netlify.app/',
            code: 'https://github.com/eslam9779/Gpt-3-',
        },
        {
            key: 'kalemon',
            tech: ['React', 'React Bootstrap'],
            color: '#f59e0b',
            link: 'https://kalemon.academy/',
            code: '',
            image: kalemon,

        },

    ];

    return (
        <section id="projects" className="projects-section">
            <Container>
                <SectionReveal>
                    <h2 className="section-title">{t('projects.title')}</h2>
                    <Row>
                        {projects.map((proj, index) => (
                            <Col md={6} lg={4} key={proj.key} className="mb-4">
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="h-100"
                                >
                                    <div className="project-card-modern">
                                        <div className="card-header-modern">
                                            <h3 className="project-title">{t(`projects.${proj.key}.name`, proj.key)}</h3>
                                            <div className="project-actions">
                                                {proj.code && <a href={proj.code} target="_blank" rel="noreferrer" className="action-btn github">
                                                    <FaGithub />
                                                </a>}
                                                <a href={proj.link} target="_blank" rel="noreferrer" className="action-btn demo">
                                                    <FaExternalLinkAlt />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="project-visual" style={{ backgroundColor: proj.image ? 'transparent' : proj.color }}>
                                            {proj.image ? (
                                                <img src={proj.image} alt={t(`projects.${proj.key}.name`, proj.key)} className="project-img-modern" />
                                            ) : (
                                                <div className="project-overlay-modern">
                                                    <span className="project-abbr-modern">
                                                        {t(`projects.${proj.key}.name`, proj.key).substring(0, 2)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="card-content-modern">
                                            <p className="project-desc">
                                                {t(`projects.${proj.key}.desc`, `${proj.key} Project Description`)}
                                            </p>
                                            <div className="tech-stack-modern">
                                                {proj.tech.map((tech, i) => (
                                                    <span className="tech-pill" key={i}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </SectionReveal>
            </Container>
        </section>
    );
};

export default Projects;
