import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import './modal.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function MyModal({ isOpen, onRequestClose, images }) {
  console.log("Images in MyModal:", images);
  const [currentSlide, setCurrentSlide] = useState(0);

  const closeModal = () => {
    setCurrentSlide(0);
    onRequestClose();
  };

  const openModal = () => {
    setCurrentSlide(0); // Initialisation de currentSlide
  };


  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }

  // Diapositive précédente
  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    )
  }

  // Vérifie s'il y a plus d'une image pour afficher les flèches et le numéro du carrousel
  const showArrowsAndNumber = images && images.length > 1

  // Utilise un effet pour définir un intervalle de défilement automatique toutes les 7 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 7000)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {isOpen && <div className="overlay"></div>}
      {isOpen && (
        <article className={isOpen ? "modal open" : "modal"}>
          <Button variant="danger" className="close-button" onClick={closeModal}>
            X
          </Button>
  
          <div className="slideshow">
          <div className='slider'>
          {images.map((image, index) => (
            <img
              key={index} 
              className={index === currentSlide ? 'Slide active' : 'slide'}
              src={image}
              alt={`slide-${index + 1}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            />
          ))}
            </div>
            {/* Affichage des flèches de navigation et le numéro du carrousel */}
            {showArrowsAndNumber && (
              <>
                <span className="left-arrow" onClick={previousSlide}>
                  <FaChevronLeft />
                </span>
                <span className="right-arrow" onClick={nextSlide}>
                  <FaChevronRight />
                </span>
                <div className="slide-number">
                  {currentSlide + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </article>
      )}
    </>
  );
}

export default MyModal;
