import React, { useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const productConfig = {
    occ11: {
      name: 'OCC 11',
      industries: ['Kraft Paper Mills', 'Paper Manufacturing'],
      locations: ['North India', 'South India', 'Central India'],
      roles: ['Procurement Manager', 'Purchase Manager', 'Supply Chain']
    },
    tissue: {
      name: 'Tissue Paper',
      industries: ['Hospitality', 'Restaurants', 'Offices'],
      locations: ['North India', 'Central India', 'Delhi NCR'],
      roles: ['Procurement Manager', 'Admin Manager', 'General Manager']
    }
  };

  const generateLeads = () => {
    setLoading(true);
    setTimeout(() => {
      const mockLeads = [
        {
          id: 1,
          company: 'Sample Paper Mills Pvt Ltd',
          contact: 'Rajesh Kumar',
          role: 'Procurement Manager',
          email: 'rajesh.kumar@samplepaper.com',
          phone: '+91 98765 43210',
          location: 'Delhi, India'
        },
        {
          id: 2,
          company: 'Indo Kraft Industries',
          contact: 'Priya Sharma',
          role: 'Purchase Manager',
          email: 'priya.sharma@indokraft.com',
          phone: '+91 98765 43211',
          location: 'Mumbai, India'
        },
        {
          id: 3,
          company: 'Green Paper Solutions',
          contact: 'Amit Patel',
          role: 'Supply Chain Manager',
          email: 'amit.patel@greenpaper.in',
          phone: '+91 98765 43212',
          location: 'Pune, India'
        }
      ];
      setLeads(mockLeads);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <header>
        <h1>🎯 Mtavex Trade - Lead Creator</h1>
        <p>Automated B2B Lead Generation for Indian Markets</p>
      </header>

      <div className="container">
        <section className="product-section">
          <h2>Select Product</h2>
          <div className="products">
            <button 
              className={product === 'occ11' ? 'active' : ''}
              onClick={() => setProduct('occ11')}
            >
              📦 OCC 11
            </button>
            <button 
              className={product === 'tissue' ? 'active' : ''}
              onClick={() => setProduct('tissue')}
            >
              🧻 Tissue Paper
            </button>
          </div>
        </section>

        {product && (
          <section className="config-section">
            <h2>Target: {productConfig[product].name}</h2>
            <div className="info">
              <div>
                <strong>Industries:</strong> {productConfig[product].industries.join(', ')}
              </div>
              <div>
                <strong>Locations:</strong> {productConfig[product].locations.join(', ')}
              </div>
              <div>
                <strong>Roles:</strong> {productConfig[product].roles.join(', ')}
              </div>
            </div>
            <button className="generate-btn" onClick={generateLeads} disabled={loading}>
              {loading ? '⏳ Generating Leads...' : '🚀 Generate Leads'}
            </button>
          </section>
        )}

        {leads.length > 0 && (
          <section className="results-section">
            <h2>Results ({leads.length} Leads Found)</h2>
            <div className="leads-grid">
              {leads.map(lead => (
                <div key={lead.id} className="lead-card">
                  <h3>{lead.company}</h3>
                  <p><strong>{lead.contact}</strong> - {lead.role}</p>
                  <p>📧 {lead.email}</p>
                  <p>📱 {lead.phone}</p>
                  <p>📍 {lead.location}</p>
                  <span className="badge">✓ Verified</span>
                </div>
              ))}
            </div>
            <div className="actions">
              <button className="export-btn">📊 Export to Sheets</button>
              <button className="email-btn">✉️ Send Campaign</button>
            </div>
          </section>
        )}
      </div>

      <footer>
        <p>© 2024 Mtavex Trade | Powered by Bhindi.io</p>
      </footer>
    </div>
  );
}

export default App;