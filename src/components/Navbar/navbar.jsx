import React, { useEffect, useState } from 'react';
import './navbar.scss';
import logo from '../../assets/logo-portfolio.webp'
import contactImg from '../../assets/image-contact.webp'
import { Link } from 'react-scroll';
import menu from '../../assets/burger-bar.webp'
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storage = getStorage();
        const cvRef = ref(storage, 'Fichiers-portfolio/CV-développeur-web-Sébastien.pdf');

        getDownloadURL(cvRef).then((url) => {
            setUrl(url);
        });
    }, []);
    return (
        <nav className="navbar">
            <a href="https://sebrip33.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="logo" className='logo' />
            </a>
            <div className="desktopMenu">
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>À propos</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Mes services</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Réalisations</Link>
                <a href={url} target="_blank" rel="noopener noreferrer" className='desktopMenuListItem cvLink'>CV</a>
            </div>
                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                    <img src={contactImg} alt="" className="desktopMenuImg" /> Contactez-moi
                </button>

                <img src={menu} alt="Menu" className='mobileMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>À propos</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Mes services</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Réalisations</Link>
                <a href={url} target="_blank" rel="noopener noreferrer" className='listItem' onClick={()=> setShowMenu(false)}>CV</a>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar