import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <Navbar expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="brand-logo">
                    {t('header.brand')}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-auto text-center">
                        <Nav.Link href="#home">{t('header.home')}</Nav.Link>
                        <Nav.Link href="#about">{t('header.about')}</Nav.Link>
                        <Nav.Link href="#services">{t('header.services')}</Nav.Link>
                        <Nav.Link href="#projects">{t('header.projects')}</Nav.Link>
                        <Nav.Link href="#contact">{t('header.contact')}</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <NavDropdown
                            title={i18n.language === 'en' ? 'EN' : 'AR'}
                            id="language-nav-dropdown"
                            className="lang-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item onClick={() => changeLanguage('en')}>
                                {t('header.language.english')}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage('ar')}>
                                {t('header.language.arabic')}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
