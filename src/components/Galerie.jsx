import { useState, useEffect } from 'react'
import './Galerie.css'

const Galerie = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      image: '/images/palais.png',
      title: 'Découvrez Avignon',
      description: 'Explorez la richesse historique d\'Avignon avec nos services de transport. Du majestueux Palais des Papes au célèbre Pont d\'Avignon, nous vous accompagnons dans votre découverte de la Cité des Papes. Profitez d\'un transport confortable et personnalisé pour visiter les joyaux du patrimoine avignonnais.'
    },
    {
      image: '/images/auto.png',
      title: 'Avignon Motor Passion',
      description: 'Ne manquez pas les grands événements automobiles d\'Avignon ! Notre service de transport vous garantit une arrivée élégante et ponctuelle à l\'Avignon Motor Passion et autres expositions. Une expérience de transport premium pour les passionnés d\'automobiles.'
    },
    {
      image: '/images/vtc3.png',
      title: 'Transport Sécurisé',
      description: 'Votre sécurité est notre priorité. Nos chauffeurs professionnels vous assurent un transport sécurisé et confortable. Disponibles 24h/24, nous vous accompagnons dans tous vos déplacements avec professionnalisme et discrétion.'
    },
    {
      image: '/images/mariage.png',
      title: 'Événements Spéciaux',
      description: 'Rendez vos moments inoubliables avec notre service de transport événementiel. Mariages, anniversaires, cérémonies... Nous vous offrons un service sur mesure pour vos occasions spéciales. Élégance et ponctualité garanties.'
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