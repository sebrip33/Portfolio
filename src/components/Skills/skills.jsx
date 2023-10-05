import React from 'react';
import './skills.scss'
import Collapse from '../Collapse/collapse'
import HTML from '../../assets/icons8-html-5-48.png'
import CSS from '../../assets/logo-css.png'
import JsScript from '../../assets/icons8-javascript-48.png'
import ReactLogo from '../../assets/icons8-react-a-javascript-library-for-building-user-interfaces-48.png'
import NodeLogo from '../../assets/icons8-node-js-48.png'
import MongoLogo from '../../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Mes services</span>
            <span className='skillDesc'>Je suis un développeur Web junior passionné. J'ai récemment terminé une formation intensive dans laquelle j'ai acquis des compétences en HTML, CSS, Javascript, React.js, Node.js.
            J'ai également appris à planifier et gérer des projets en utilisant la méthodologie Agile, ainsi qu'à optimiser et déboguer du code.
            De plus, j'ai mis en place un système de base de données NoSQL avec MongoDB.
            Motivé par le défi d'apprendre et de m'adapter dans le domaine en constante évolution, je suis toujours à la recherche de nouvelles opportunités pour appliquer et améliorer mes compétences du développement web.
            N'hésitez pas à parcourir mon portfolio pour découvrir certains des projets sur lesquels j'ai travaillé !</span>

            <div className='skills-dropdown'>
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={HTML} alt="HTML" className='skills-dropdown-img' />
                        HTML
                        </div>
                    }
                        text="J'utilise HTML pour créer la structure d'un site web. Je définis la mise en page, les titres, les paragraphes et les liens en utilisant des balises HTML. Cela permet aux navigateurs web de comprendre la structure d'une page et d'afficher le contenu de manière cohérente pour les visiteurs."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={CSS} alt="CSS" className='skills-dropdown-img' />
                        CSS
                        </div>
                    }
                        text="J'utilise le CSS pour styliser un site web, ce qui englobe la définition des couleurs, des polices, des marges, des bordures, et d'autres éléments de mise en page. Le CSS permet de personnaliser l'apparence de votre application, la rendant ainsi attrayante, professionnelle et cohérente, ce qui contribue à créer une expérience utilisateur positive et à mettre en valeur vos réalisations."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={JsScript} alt="Javascript" className='skills-dropdown-img' />
                        Javascript
                        </div>
                    }
                        text="J'utilise JavaScript pour transformer des sites web en expériences interactives et engageantes à travers des fonctionnalités avancées telles que des animations fluides, des formulaires de contact dynamiques et des effets visuels qui améliorent l'expérience utilisateur. Ces compétences démontrent mon engagement à fournir des solutions interactives pour les visiteurs."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={ReactLogo} alt="React" className='skills-dropdown-img' />
                        React
                        </div>
                    }
                        text="En tant que développeur junior, j'utilise React, une bibliothèque JavaScript, pour créer des interfaces web interactives et conviviales. Ma maîtrise de React se traduit par la création de composants réutilisables, l'amélioration de la réactivité des applications et la collaboration au sein d'équipes de développement. Mon objectif est de contribuer à des projets innovants et d'apprendre continuellement pour progresser en tant que développeur web."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={NodeLogo} alt="Node.js" className='skills-dropdown-img' />
                        Node.js
                        </div>
                    }
                        text="J'utilise Node.js et Express.js pour construire des applications web robustes et performantes côté serveur.  Je prends plaisir avec Node.js de créer des serveurs web évolutifs et  gérer efficacement les opérations asynchrones. En combinant Node.js avec Express.js, je développe des API RESTful et des applications web interactives, contribuant ainsi à des solutions technologiques avancées. Mon engagement à maîtriser ces technologies montre ma volonté de grandir en tant que développeur back-end et de créer des applications web de haute qualité"
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={MongoLogo} alt="MongoDB" className='skills-dropdown-img' />
                        MongoDB
                        </div>
                    }
                        text="En tant que développeur junior, j'intègre MongoDB dans mes projets pour gérer efficacement les bases de données NoSQL. Ma familiarité avec MongoDB me permet de stocker et de récupérer des données de manière flexible et évolutive. J'utilise MongoDB pour créer des applications web robustes avec une gestion efficace des données, ce qui renforce ma capacité à fournir des solutions de base de données de haute qualité pour des applications modernes."
                />
            </div>
        </section>
    );
}

export default Skills;