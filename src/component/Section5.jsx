import React from 'react'

const Section5 = () => {
    return (
        <section 
            className="py-5" 
            style={{ 
                fontFamily: 'Poppins, sans-serif',
                backgroundImage: 'url("src/images/pexels-guillaume-pierre-leroy-11417443 2.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '60vh',
                position: 'relative'
            }}
        >
            {/* Background overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1
            }}></div>
            
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center min-vh-50 py-3 py-md-5">
                    {/* Left Side - Text Content Box */}
                    <div className="col-lg-6 col-md-8 col-12 px-3 px-md-4">
                        <div 
                            className="text-content p-3 p-sm-4 p-md-5"
                            style={{
                                borderRadius: 'clamp(15px, 3vw, 20px)',
                            }}
                        >
                            <h2 
                                className="display-4 fw-bold mb-3 mb-md-4"
                                style={{
                                    color: 'white',
                                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                    lineHeight: '1.2'
                                }}
                            >
                                Perfume Year-End Sale! Up to 50% OFF
                            </h2>
                            
                            <p 
                                className="lead mb-3 mb-md-4"
                                style={{
                                    color: '#E0E0E0',
                                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                                    lineHeight: '1.6',
                                    marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
                                }}
                            >
                                Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!
                            </p>
                            
                            <button 
                                className="btn btn-lg px-3 px-md-4 py-2 py-md-3"
                                style={{
                                    backgroundColor: '#AB572D',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(171, 87, 45, 0.3)',
                                    minHeight: '45px',
                                    width: 'auto'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#8B4513'
                                    e.target.style.transform = 'translateY(-3px)'
                                    e.target.style.boxShadow = '0 8px 25px rgba(171, 87, 45, 0.4)'
                                }}
                                onMouseOut={(e) => {
                                    // e.target.style.backgroundColor = '#AB572D'
                                    e.target.style.transform = 'translateY(0)'
                                    e.target.style.boxShadow = '0 4px 15px rgba(171, 87, 45, 0.3)'
                                }}
                            >
                                <span className="d-none d-sm-inline">Know More</span>
                                <span className="d-inline d-sm-none">More</span>
                                <i className="fas fa-arrow-right ms-1 ms-md-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5