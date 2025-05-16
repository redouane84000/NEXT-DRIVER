import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Devis.css';

const Devis = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    depart: '',
    arrivee: '',
    date: '',
    heure: '',
    nom: '',
    prenom: '',
    passagers: '1',
    telephone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
  };

  return (
    <div className="devis-container">
      <div className="devis-content">
        <div className="devis-form-section">
          <h2>{t('devis.title')}</h2>
          <p className="subtitle">{t('devis.subtitle')}</p>

          <form onSubmit={handleSubmit} className="devis-form">
            <div className="form-row">
              <div className="form-group">
                <label>{t('devis.form.nom')}</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder={t('devis.form.placeholder.nom')}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('devis.form.prenom')}</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder={t('devis.form.placeholder.prenom')}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('devis.form.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('devis.form.placeholder.email')}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('devis.form.telephone')}</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder={t('devis.form.placeholder.telephone')}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('devis.form.depart')}</label>
                <input
                  type="text"
                  name="depart"
                  value={formData.depart}
                  onChange={handleChange}
                  placeholder={t('devis.form.placeholder.depart')}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('devis.form.arrivee')}</label>
                <input
                  type="text"
                  name="arrivee"
                  value={formData.arrivee}
                  onChange={handleChange}
                  placeholder={t('devis.form.placeholder.arrivee')}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('devis.form.date')}</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('devis.form.heure')}</label>
                <input
                  type="time"
                  name="heure"
                  value={formData.heure}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t('devis.form.passagers')}</label>
              <input
                type="number"
                name="passagers"
                value={formData.passagers}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label>{t('devis.form.message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('devis.form.placeholder.message')}
                rows="4"
              />
            </div>

            <button type="submit" className="submit-btn">
              {t('devis.form.submit')}
            </button>
          </form>
        </div>
        <div className="devis-image-section">
          <img src="/images/vtc2.png" alt="VTC" className="devis-image" />
        </div>
      </div>
    </div>
  );
};

export default Devis; 