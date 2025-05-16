import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Footer from './components/Footer'
import LanguageSelector from './components/LanguageSelector'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

// Composants
import Devis from './components/Devis'
import SimulationPrix from './components/Reservation'
import Galerie from './components/Galerie'
import OuSommesNous from './components/OuSommesNous'
import DevenirChauffeur from './components/DevenirChauffeur'

// Variants d'animation
const pageVariants = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState('devis')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        // Défilement vers le bas
        setIsHeaderVisible(false)
      } else {
        // Défilement vers le haut
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'devis':
        return <Devis />
      case 'simulation-prix':
        return <SimulationPrix />
      case 'galerie':
        return <Galerie />
      case 'ou-sommes-nous':
        return <OuSommesNous />
      case 'devenir-chauffeur':
        return <DevenirChauffeur />
      default:
        return <Devis />
    }
  }

  return (
    <div className="app">
      <div className={`brand-text ${!isHeaderVisible ? 'hide' : ''}`}>NEXT-DRIVER</div>
      <LanguageSelector />
      <header className={`header ${!isHeaderVisible ? 'hide' : ''}`}>
        <div className="header-content">
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <button 
                  className={currentPage === 'devis' ? 'active' : ''} 
                  onClick={() => handlePageChange('devis')}
                >
                  {t('nav.devis')}
                </button>
              </li>
              <li>
                <button 
                  className={currentPage === 'simulation-prix' ? 'active' : ''} 
                  onClick={() => handlePageChange('simulation-prix')}
                >
                  {t('nav.simulation')}
                </button>
              </li>
              <li>
                <button 
                  className={currentPage === 'galerie' ? 'active' : ''} 
                  onClick={() => handlePageChange('galerie')}
                >
                  {t('nav.galerie')}
                </button>
              </li>
              <li>
                <button 
                  className={currentPage === 'ou-sommes-nous' ? 'active' : ''} 
                  onClick={() => handlePageChange('ou-sommes-nous')}
                >
                  {t('nav.location')}
                </button>
              </li>
              <li>
                <button 
                  className={currentPage === 'devenir-chauffeur' ? 'active' : ''} 
                  onClick={() => handlePageChange('devenir-chauffeur')}
                >
                  {t('nav.chauffeur')}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="page-container"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
