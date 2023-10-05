import React from 'react'
import './contact.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import LinkedinIcon from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
import GitHub from '../../assets/github-mark.png'
import Instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser'

function Contact() {
    
    return (
        <section id="contact">
            <h1 className='contactPageTitle'>Contactez-moi</h1>
            <span className='contactDesc'>Veuillez remplir le formulaire suivant afin de discuter d'éventuelles opportunités de travail.</span>
            <Formik
                initialValues={{ your_name: '', your_email: '', message: ''}}
                validationSchema={Yup.object({
                    your_name: Yup.string()
                        .max(15, 'Doit contenir 15 caractères ou moins')
                        .required('Champs obligatoire'),
                    your_email: Yup.string()
                        .email('Adresse e-mail invalide')
                        .required('Champs obligatoire'),
                    message: Yup.string()
                        .required('Champs obligatoire'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        //alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    emailjs.send('service_y12kxfj', 'template_kgjy3qp', values, 'OpT0x_9fN-brkvPzK')
                        .then((result) => {
                            console.log(result.text);
                            resetForm();
                            alert("Email envoyé !");
                        }, (error) => {
                            console.log(error.text)
                        });
                }}
            >
                <Form className='contactForm'>
                    <label htmlFor="name"></label>
                    <Field type="text" className="name" placeholder="Votre Nom" name="your_name"/>
                    <ErrorMessage name="name" />

                    <label htmlFor="email"></label>
                    <Field type="email" className="email" placeholder="Votre Email" name="your_email"/>
                    <ErrorMessage name="email" />

                    <label htmlFor="message"></label>
                    <Field as="textarea" className="msg" rows="5" placeholder="Votre Message" name="message"/>
                    <ErrorMessage name="message" />

                    <button type="submit" value="Send" className='submitBtn'>Envoyer</button>
                </Form>
            </Formik>
            <div className='links'>
                <img src={LinkedinIcon} alt="LinkedIn" className='link' />
                <a href="https://github.com/sebrip33" target="_blank" rel="noopener noreferrer">
                  <img src={GitHub} alt="GitHub" className='link' />
                </a>
                <img src={Twitter} alt="Twitter" className='link' />
                <img src={Instagram} alt="Instagram" className='link' />
            </div>
        </section>
    );
};

export default Contact