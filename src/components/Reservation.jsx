import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    kilometres: '',
    heure: '',
    periode: 'jour'
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [price, setPrice] = useState(null);
  const [showPrice, setShowPrice] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Déterminer automatiquement la période en fonction de l'heure
    if (name === 'heure') {
      const heure = parseInt(value.split(':')[0]);
      const periode = (heure >= 7 && heure < 19) ? 'jour' : 'nuit';
      setFormData(prev => ({
        ...prev,
        periode
      }));
    }
  };

  const calculatePrice = (e) => {
    e.preventDefault();
    if (!formData.heure) {
      alert('Veuillez sélectionner une heure');
      return;
    }
    setIsCalculating(true);
    
    setTimeout(() => {
      const basePrice = parseFloat(formData.kilometres) * 2.50;
      const finalPrice = formData.periode === 'nuit' ? basePrice * 1.30 : basePrice;
      setPrice(finalPrice.toFixed(2));
      setIsCalculating(false);
      setShowPrice(true);
    }, 500);
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const priceVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="reservation-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants}>Simulation de Prix</motion.h2>
      <motion.p className="subtitle" variants={itemVariants}>
        Calculez instantanément le prix de votre trajet
      </motion.p>

      <motion.form 
        onSubmit={calculatePrice}
        variants={containerVariants}
        className="reservation-form"
      >
        <motion.div variants={itemVariants} className="form-group">
          <label htmlFor="kilometres">Distance en kilomètres</label>
          <input
            type="number"
            id="kilometres"
            name="kilometres"
            value={formData.kilometres}
            onChange={handleChange}
            placeholder="Ex: 10"
            min="0"
            step="0.1"
            required
          />
        </motion.div>

        <motion.div variants={itemVariants} className="form-group">
          <label htmlFor="heure">Heure du trajet</label>
          <input
            type="time"
            id="heure"
            name="heure"
            value={formData.heure}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div variants={itemVariants} className="form-group">
          <label>Période</label>
          <div className="periode-display">
            {formData.periode === 'jour' ? 'Jour (7h - 19h)' : 'Nuit (19h - 7h) +30%'}
          </div>
        </motion.div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isCalculating || !formData.heure}
        >
          {isCalculating ? 'Calcul en cours...' : 'Calculer le prix'}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {showPrice && price && (
          <motion.div
            className="price-result"
            variants={priceVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h3>Prix estimé</h3>
            <div className="price-value">{price}€</div>
            <p className="price-note">
              * Prix calculé au tarif de 2.50€ par kilomètre
              {formData.periode === 'nuit' && ' avec majoration de 30%'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Reservation; 