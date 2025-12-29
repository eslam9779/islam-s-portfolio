import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import gptImg from '../assets/gpt.png';
import './Projects.css';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            key: 'gpt3',
            tech: ['React', 'CSS', 'Framer Motion'],
            image: gptImg,
            link: 'https://example.com/gpt3',
            code: 'https://github.com/example/gpt3'
        },
        {
            key: 'tebian',
            tech: ['React', 'PrimeReact'],
            color: '#4f46e5',
            link: '#',
            code: '#'
        },
        {
            key: 'bareq',
            tech: ['React', 'React Bootstrap', 'React Forms', 'Ant Design'],
            color: '#0ea5e9',
            link: '#',
            code: '#'
        },
        {
            key: 'awqaty',
            tech: ['Laravel Blade', 'Bootstrap 5'],
            color: '#10b981',
            link: '#',
            code: '#'
        },
        {
            key: 'kalemon',
            tech: ['React', 'React Bootstrap'],
            color: '#f59e0b',
            link: '#',
            code: '#'
        },
        {
            key: 'afedny',
            tech: ['Laravel Blade', 'Bootstrap 5'],
            color: '#ef4444',
            link: '#',
            code: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <Container>
                <h2 className="section-title">{t('projects.title')}</h2>
                <Row>
                    {projects.map((proj, index) => (
                        <Col md={6} lg={4} key={proj.key} className="mb-4">
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card className="project-card h-100">
                                    <div className="project-img-wrapper" style={{ backgroundColor: proj.image ? 'transparent' : proj.color }}>
                                        {proj.image ? (
                                            <img src={proj.image} alt={t(`projects.${proj.key}.name`, proj.key)} className="project-img" />
                                        ) : (
                                            <div className="project-overlay">
                                                <span className="project-abbr">{t(`projects.${proj.key}.name`, proj.key).substring(0, 2)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between align-items-center">
                                            {t(`projects.${proj.key}.name`, proj.key)}
                                            <div className="project-links">
                                                <a href={proj.code} target="_blank" rel="noreferrer" className="ms-2 text-muted"><FaGithub /></a>
                                                <a href={proj.link} target="_blank" rel="noreferrer" className="ms-2 text-accent"><FaExternalLinkAlt /></a>
                                            </div>
                                        </Card.Title>
                                        <Card.Text>
                                            {t(`projects.${proj.key}.desc`, `${proj.key} Project Description`)}
                                        </Card.Text>
                                        <div className="tech-stack mt-3">
                                            {proj.tech.map((tech, i) => (
                                                <Badge bg="dark" className="me-2 mb-2 tech-badge" key={i}>
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
