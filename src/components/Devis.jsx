import { useState } from 'react'
import './Devis.css'

function Devis() {
  const [formData, setFormData] = useState({
    depart: '',
    arrivee: '',
    date: '',
    heure: '',
    nom: '',
    passagers: '1',
    telephone: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique de soumission du formulaire
  }

  return (
    <div className="devis-container">
      <div className="devis-content">
        <div className="devis-form-section">
          <h2>Devis</h2>
          <p className="subtitle">service gratuit</p>
          
          <form onSubmit={handleSubmit} className="devis-form">
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Heure</label>
                <input
                  type="time"
                  value={formData.heure}
                  onChange={(e) => setFormData({...formData, heure: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Adresse de départ</label>
              <input
                type="text"
                value={formData.depart}
                onChange={(e) => setFormData({...formData, depart: e.target.value})}
                placeholder="Adresse de départ"
                required
              />
            </div>

            <div className="form-group">
              <label>Adresse d'arrivée</label>
              <input
                type="text"
                value={formData.arrivee}
                onChange={(e) => setFormData({...formData, arrivee: e.target.value})}
                placeholder="Adresse d'arrivée"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Nom</label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="form-group">
                <label>Passager(s)</label>
                <select
                  value={formData.passagers}
                  onChange={(e) => setFormData({...formData, passagers: e.target.value})}
                  required
                >
                  <option value="1">1 passager</option>
                  <option value="2">2 passagers</option>
                  <option value="3">3 passagers</option>
                  <option value="4">4 passagers</option>
                  <option value="5+">5 passagers ou plus</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Téléphone</label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>

              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Votre adresse email"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-button">
              Obtenir un devis
            </button>
          </form>
        </div>
        <div className="devis-image-section">
          <img src="/images/vtc2.png" alt="VTC" className="devis-image" />
        </div>
      </div>
    </div>
  )
}

export default Devis 