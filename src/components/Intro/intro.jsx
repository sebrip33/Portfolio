import React from 'react';
import './intro.scss';
import Photo from '../../assets/photo-sebastien2.webp'
import btnImg from '../../assets/hireme.webp'

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Bonjour, </span>
                <span className='introText'>Je suis <span className='introName'>Sébastien</span> <br />Développeur Web junior</span>
                <p className='introP'>Après un an de formation spécialisé Javascript/React.js/Node.js,<br />je me lance dans l'aventure du monde formidable du Web Development</p>
                <button className="btn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                    <img src={btnImg} alt='Valise' className='btnImg'/> Recrutez-moi
                </button>
            </div>
            <img src={Photo} alt="Sébastien Ripert" className="my-photo" />
        </section>
    )
}

export default Intro
