import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './DevenirChauffeur.css';

const DevenirChauffeur = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    experience: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
  };

  return (
    <div className="devenir-chauffeur-container">
      <div className="devenir-chauffeur-content">
        <div className="devenir-chauffeur-form">
          <h2>{t('nav.chauffeur')}</h2>
          <p className="subtitle">{t('devis.subtitle')}</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">{t('devis.form.nom')}</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="prenom">{t('devis.form.prenom')}</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('devis.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">{t('devis.form.telephone')}</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Expérience en conduite</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez votre expérience</option>
                <option value="debutant">Débutant</option>
                <option value="1-3">1-3 ans</option>
                <option value="3-5">3-5 ans</option>
                <option value="5+">Plus de 5 ans</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('devis.form.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="submit-btn">
              {t('devis.form.submit')}
            </button>
          </form>
        </div>

        <div className="devenir-chauffeur-info">
          <h3>Pourquoi nous rejoindre ?</h3>
          <ul>
            <li>Horaires flexibles</li>
            <li>Revenus attractifs</li>
            <li>Formation continue</li>
            <li>Support 24/7</li>
            <li>Équipement moderne</li>
          </ul>

          <div className="join-team-section">
            <h3>Rejoindre notre équipe</h3>
            <div className="join-team-image">
              <img 
                src="/images/aeroport.png" 
                alt="Aéroport" 
              />
            </div>
            <p>Rejoignez une équipe dynamique et professionnelle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevenirChauffeur; 