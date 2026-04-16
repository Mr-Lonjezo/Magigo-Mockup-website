import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const { productName } = useParams<{ productName?: string }>();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    location: '',
    message: '',
    preferredContact: 'email',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (productName) {
      setFormData(prev => ({ ...prev, product: decodeURIComponent(productName) }));
    }
  }, [productName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create form data for Netlify
      const formBody = {
        "form-name": "enquiry",
        ...formData
      };

      // Submit to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formBody)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: '',
          quantity: '',
          location: '',
          message: '',
          preferredContact: 'email',
        });
      } else {
        setError('Something went wrong. Please try again or contact us directly by phone.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Network error. Please check your connection or contact us directly by phone.');
    } finally {
      setLoading(false);
    }
  };

  const locations = ['Blantyre', 'Lilongwe', 'Mzuzu', 'Zomba', 'Other'];
  const products = [
    'Cement & Lime', 
    'Steel Reinforcement', 
    'Nails & Brick Force Wire', 
    'PVC Pipes & Fittings', 
    'DPC & DPM Membrane', 
    'Electrical Wires & Fittings', 
    'Tile Adhesive & Wall Putty', 
    'Termite Treatment', 
    'General Hardware', 
    'Other'
  ];

  if (submitted) {
    return (
      <section className="contact-form-page" style={{
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '60px',
        background: 'var(--cream)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="white" fill="none" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: '28px',
              fontWeight: 800,
              color: 'var(--navy-dark)',
              marginBottom: '16px',
            }}>
              Enquiry Sent Successfully!
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--gray)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}>
              Thank you for contacting Magigo Hardware. Our team will get back to you within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/')}
                className="btn-primary"
                style={{ padding: '14px 28px' }}
              >
                Return to Home
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
                className="btn-secondary"
                style={{ 
                  padding: '14px 28px',
                  background: 'transparent',
                  color: 'var(--navy)',
                  border: '2px solid var(--navy)',
                }}
              >
                New Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-page" style={{
      minHeight: '100vh',
      paddingTop: '100px',
      paddingBottom: '60px',
      background: 'var(--cream)',
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--navy)',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(27,58,92,0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
          }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>

        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: 'var(--shadow-lg)',
        }}>
          <div className="section-eyebrow" style={{ marginBottom: '8px' }}>
            Get in Touch
          </div>
          <h1 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            color: 'var(--navy-dark)',
            marginBottom: '16px',
          }}>
            Material Enquiry Form
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'var(--gray)',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
            Fill out the form below and our team will provide you with pricing and availability information.
          </p>

          {error && (
            <div style={{
              background: '#FEE2E2',
              border: '1px solid #EF4444',
              color: '#991B1B',
              padding: '12px 16px',
              borderRadius: '10px',
              marginBottom: '24px',
              fontSize: '14px',
            }}>
              {error}
            </div>
          )}

          <form
            name="enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Netlify Form Detection */}
            <input type="hidden" name="form-name" value="enquiry" />
            
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }}>
              <input name="bot-field" />
            </div>

            <div style={{ display: 'grid', gap: '24px' }}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '2px solid var(--gray-light)',
                    borderRadius: '10px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'Source Sans 3, sans-serif',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-light)'}
                />
              </div>

              {/* Email & Phone Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '15px',
                      border: '2px solid var(--gray-light)',
                      borderRadius: '10px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Source Sans 3, sans-serif',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-light)'}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+265 XXX XXX XXX"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '15px',
                      border: '2px solid var(--gray-light)',
                      borderRadius: '10px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Source Sans 3, sans-serif',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-light)'}
                  />
                </div>
              </div>

              {/* Product & Quantity Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label htmlFor="product" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Product Interested In *
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '15px',
                      border: '2px solid var(--gray-light)',
                      borderRadius: '10px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Source Sans 3, sans-serif',
                      background: 'white',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-light)'}
                  >
                    <option value="">Select a product</option>
                    {products.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Approximate Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 50 bags"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '15px',
                      border: '2px solid var(--gray-light)',
                      borderRadius: '10px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Source Sans 3, sans-serif',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-light)'}
                  />
                </div>
              </div>

              {/* Location Field */}
              <div>
                <label htmlFor="location" style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  Delivery Location *
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '2px solid var(--gray-light)',
                    borderRadius: '10px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'Source Sans 3, sans-serif',
                    background: 'white',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-light)'}
                >
                  <option value="">Select location</option>
                  {locations.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions..."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: '2px solid var(--gray-light)',
                    borderRadius: '10px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'Source Sans 3, sans-serif',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-light)'}
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  Preferred Contact Method
                </label>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--orange)' }}
                    />
                    <span style={{ fontSize: '14px', color: 'var(--text)' }}>Email</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--orange)' }}
                    />
                    <span style={{ fontSize: '14px', color: 'var(--text)' }}>Phone</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--orange)' }}
                    />
                    <span style={{ fontSize: '14px', color: 'var(--text)' }}>WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  padding: '16px 32px',
                  fontSize: '16px',
                  marginTop: '16px',
                  width: '100%',
                  justifyContent: 'center',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    Submit Enquiry
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" fill="none" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}