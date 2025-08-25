import React from 'react'
import image from '../images/ariekoprasethio_a_bottle_of_perfume_spray_super_realistic_4K_re_f44fec90-0d8e-4dc3-96f8-3f03da660dec (1)FFSB 1.png'

const Herosection = () => {
    return (
        <section className="hero-section py-5" style={{ fontFamily: 'Poppins, sans-serif', minHeight: '80vh', background: 'linear-gradient(160deg,rgba(18, 17, 17, 1) 43%, rgba(66, 62, 62, 1) 100%)' }}>
            <div className="container">
                <div className="row align-items-center min-vh-75">
                    {/* Left Side - Text Content */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className="hero-content">
                            <h1 className="display-6 fw-bold text-white mb-4">
                                Elevate Your Spirit with Victory Scented Fragrances!
                            </h1>
                            <p className="lead text-white mb-4 pe-lg-4">
                                Shop now and embrace the sweet smell of victory with Local Face.
                            </p>
                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-lg me-3" style={{color: 'white', backgroundColor: '#AB572D', borderColor: '#AB572D'}}>
                                    <i className="fas fa-shopping-bag me-2"></i>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-lg-6 col-md-12">
                        <div className="hero-image text-center">
                            <div className="position-relative">
                                {/* Placeholder for perfume image */}
                                <div
                                    className="hero-img-placeholder rounded-3 mx-auto"
                                    style={{
                                        width: '400px',
                                        height: '500px',
                                        maxWidth: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    <div className="text-center">
                                        <img src={image} alt="Perfume" className="img-fluid" style={{maxWidth: '600px', maxHeight: '500px', objectFit: 'contain'}} />
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div
                                    className="position-absolute bg-white rounded-pill shadow px-3 py-2 d-none d-lg-block"
                                    style={{ top: '20px', right: '20px' }}
                                >
                                    <small className="text-muted">⭐ 4.9/5 Rating</small>
                                </div>

                                <div
                                    className="position-absolute bg-primary text-white rounded-pill shadow px-3 py-2 d-none d-lg-block"
                                    style={{ bottom: '20px', left: '20px' }}
                                >
                                    <small>🔥 Best Seller</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection
