import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Devis.css';

const Devis = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    lieu_depart: '',
    lieu_arrivee: '',
    date_trajet: '',
    heure_trajet: '',
    nombre_passagers: '1',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      lieu_depart: '',
      lieu_arrivee: '',
      date_trajet: '',
      heure_trajet: '',
      nombre_passagers: '1',
      message: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://vtc-production.up.railway.app/vtc', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    resetForm();
    alert('Devis envoyé avec succès !');
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
                <label htmlFor="lieu_depart">Départ</label>
                <input
                  type="text"
                  id="lieu_depart"
                  name="lieu_depart"
                  value={formData.lieu_depart}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lieu_arrivee">Arrivée</label>
                <input
                  type="text"
                  id="lieu_arrivee"
                  name="lieu_arrivee"
                  value={formData.lieu_arrivee}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('devis.form.date')}</label>
                <input
                  type="date"
                  name="date_trajet"
                  value={formData.date_trajet}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('devis.form.heure')}</label>
                <input
                  type="time"
                  name="heure_trajet"
                  value={formData.heure_trajet}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t('devis.form.passagers')}</label>
              <input
                type="number"
                name="nombre_passagers"
                value={formData.nombre_passagers}
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

            <button onClick={handleSubmit} type="submit" className="submit-btn">
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