import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Galerie.css'

function Galerie() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      image: '/images/palais.png',
      title: t('galerie.slides.avignon.title'),
      description: t('galerie.slides.avignon.description')
    },
    {
      image: '/images/auto.png',
      title: t('galerie.slides.motor.title'),
      description: t('galerie.slides.motor.description')
    },
    {
      image: '/images/vtc3.png',
      title: t('galerie.slides.transport.title'),
      description: t('galerie.slides.transport.description')
    },
    {
      image: '/images/mariage.png',
      title: t('galerie.slides.evenements.title'),
      description: t('galerie.slides.evenements.description')
    },
    {
      image: '/images/lavandes.png',
      title: 'Provence & Lavande',
      description: 'Partez à la découverte des champs de lavande de Provence. Notre service de transport vous permet d\'explorer les plus beaux sites de la région en toute sérénité. Une expérience unique au cœur de la Provence.'
    },
    {
      image: '/images/aeroport2.png',
      title: 'Transport Aéroport & Gare',
      description: 'Voyagez en toute tranquillité avec notre service de transport vers les aéroports et gares. Transferts fiables et ponctuels pour vos déplacements professionnels ou personnels. Nous assurons votre connexion avec tous les moyens de transport.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="galerie-container">
      <div className="galerie-content">
        <div className="galerie-image-section">
          <img 
            src={slides[currentIndex].image} 
            alt={slides[currentIndex].title}
            className={`galerie-image ${isAnimating ? 'animating' : ''}`}
          />
        </div>
        <div className={`galerie-text-section ${isAnimating ? 'animating' : ''}`}>
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
    </div>
  )
}

export default Galerie 