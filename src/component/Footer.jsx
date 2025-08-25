import React from 'react'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'Poppins, sans-serif' }}>
            {/* Main Footer Content */}
            <div className="container py-3 py-md-5">
                <div className="row g-4">
                    {/* Company Info */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="footer-section">
                            <h3 
                                className="fw-bold mb-3 mb-md-4"
                                style={{
                                    color: '#AB572D',
                                    fontSize: 'clamp(1.3rem, 3vw, 1.5rem)'
                                }}
                            >
                                Perfume Palace
                            </h3>
                            <p 
                                className="mb-3 mb-md-4"
                                style={{
                                    color: '#E0E0E0',
                                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                    lineHeight: '1.6'
                                }}
                            >
                                Discover the world's finest fragrances at Perfume Palace. We curate premium perfumes from renowned brands and artisan creators, bringing you an exquisite collection of scents that define luxury and elegance.
                            </p>
                            
                            {/* Social Media Icons */}
                            <div className="social-icons">
                                <h5 
                                    className="fw-semibold mb-2 mb-md-3"
                                    style={{
                                        color: 'white',
                                        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)'
                                    }}
                                >
                                    Follow Us
                                </h5>
                                <div className="d-flex gap-2 gap-md-3">
                                    {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                                        <a 
                                            key={social}
                                            href="#"
                                            style={{
                                                color: '#E0E0E0',
                                                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.color = '#AB572D'
                                                e.target.style.transform = 'translateY(-3px)'
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.color = '#E0E0E0'
                                                e.target.style.transform = 'translateY(0)'
                                            }}
                                        >
                                            <i className={`fab fa-${social}`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 col-6 mt-4 mt-md-0">
                        <div className="footer-section">
                            <h5 
                                className="fw-semibold mb-3 mb-md-4"
                                style={{
                                    color: 'white',
                                    fontSize: '(1rem, 2.5vw, 1.2rem)'
                                }}
                            >
                                Quick Links
                            </h5>
                            <ul className="list-unstyled">
                                {['Home', 'Shop', 'About Us', 'Services', 'Blog'].map((link) => (
                                    <li key={link} className="mb-2">
                                        <a 
                                            href="#"
                                            style={{
                                                color: '#E0E0E0',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.color = '#AB572D'
                                                e.target.style.paddingLeft = '5px'
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.color = '#E0E0E0'
                                                e.target.style.paddingLeft = '0'
                                            }}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="col-lg-2 col-md-6 col-6 mt-4 mt-md-0">
                        <div className="footer-section">
                            <h5 
                                className="fw-semibold mb-3 mb-md-4"
                                style={{
                                    color: 'white',
                                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'
                                }}
                            >
                                Categories
                            </h5>
                            <ul className="list-unstyled">
                                {['Men\'s Perfume', 'Women\'s Perfume', 'Unisex', 'Luxury Brands', 'Gift Sets', 'New Arrivals'].map((category) => (
                                    <li key={category} className="mb-2">
                                        <a 
                                            href="#"
                                            style={{
                                                color: '#E0E0E0',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.color = '#AB572D'
                                                e.target.style.paddingLeft = '5px'
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.color = '#E0E0E0'
                                                e.target.style.paddingLeft = '0'
                                            }}
                                        >
                                            {category}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info & Newsletter */}
                    <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0">
                        <div className="footer-section">
                            <h5 
                                className="fw-semibold mb-3 mb-md-4"
                                style={{
                                    color: 'white',
                                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'
                                }}
                            >
                                Contact Info
                            </h5>
                            
                            {/* Contact Details */}
                            <div className="contact-info mb-3 mb-md-4">
                                <div className="d-flex align-items-center mb-3">
                                    <i 
                                        className="fas fa-map-marker-alt me-3"
                                        style={{ color: '#AB572D', fontSize: '1.1rem' }}
                                    ></i>
                                    <span style={{ color: '#E0E0E0', fontSize: '0.95rem' }}>
                                        123 Fragrance Street, Perfume City, PC 12345
                                    </span>
                                </div>
                                <div className="d-flex align-items-start align-items-sm-center mb-2 mb-md-3">
                                    <i 
                                        className="fas fa-phone me-3"
                                        style={{ color: '#AB572D', fontSize: '1.1rem' }}
                                    ></i>
                                    <span style={{ color: '#E0E0E0', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                                        +1 (555) 123-4567
                                    </span>
                                </div>
                                <div className="d-flex align-items-start align-items-sm-center mb-3 mb-md-4">
                                    <i 
                                        className="fas fa-envelope me-3"
                                        style={{ color: '#AB572D', fontSize: '1.1rem' }}
                                    ></i>
                                    <span style={{ color: '#E0E0E0', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                                        info@perfumepalace.com
                                    </span>
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="newsletter">
                                <h6 
                                    className="fw-semibold mb-2 mb-md-3"
                                    style={{
                                        color: 'white',
                                        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)'
                                    }}
                                >
                                    Subscribe to Newsletter
                                </h6>
                                <div className="input-group flex-column flex-sm-row">
                                    <input 
                                        type="email" 
                                        className="form-control footer-email-input"
                                        placeholder="Enter your email"
                                        style={{
                                            backgroundColor: '#2a2a2a',
                                            border: '1px solid #444',
                                            color: 'white',
                                            borderRadius: 'clamp(3px, 1vw, 8px)',
                                            marginBottom: 'clamp(8px, 2vw, 15px)',
                                            fontSize: 'clamp(0.8rem, 2.2vw, 1rem)',
                                            padding: 'clamp(8px, 2vw, 12px) clamp(10px, 2.5vw, 15px)',
                                            width: '100%',
                                            minHeight: 'clamp(35px, 8vw, 45px)',
                                            transition: 'all 0.3s ease',
                                            outline: 'none'
                                        }}
                                    />
                                    <button 
                                        style={{
                                            backgroundColor: '#AB572D',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '5px',
                                            padding: 'clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)',
                                            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                            transition: 'all 0.3s ease',
                                            width: '100%'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#8B4513'
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#AB572D'
                                        }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div 
                className="footer-bottom py-3 py-md-4"
                style={{
                    backgroundColor: '#0f0f0f',
                    borderTop: '1px solid #333'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
                            <p 
                                className="mb-0"
                                style={{
                                    color: '#B0B0B0',
                                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                                }}
                            >
                                © 2024 Perfume Palace. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 col-12 text-center text-md-end">
                            <div className="footer-links">
                                {['Privacy Policy', 'Terms of Service', 'Shipping Info', 'Returns'].map((link, index) => (
                                    <span key={link}>
                                        <a 
                                            href="#"
                                            style={{
                                                color: '#B0B0B0',
                                                textDecoration: 'none',
                                                fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                                                transition: 'color 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.color = '#AB572D'
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.color = '#B0B0B0'
                                            }}
                                        >
                                            {link}
                                        </a>
                                        {index < 3 && <span style={{ color: '#666', margin: '0 clamp(5px, 2vw, 10px)' }} className="d-none d-sm-inline">|</span>}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer