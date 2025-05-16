import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="footer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="footer-content">
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Contactez-nous</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:0782197182">07 82 19 71 82</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:nextdriverred@gmail.com">nextdriverred@gmail.com</a>
            </div>
          </div>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Notre adresse</h3>
          <div className="address-info">
            <div className="address-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>10 RUE DE L'armenie<br />84000 Avignon</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Horaires</h3>
          <div className="hours-info">
            <p>Service disponible 24h/24</p>
            <p>Tarif majoré de 30% de 19h à 7h</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
      >
        <p>&copy; {new Date().getFullYear()} Next-Driver. Tous droits réservés.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 