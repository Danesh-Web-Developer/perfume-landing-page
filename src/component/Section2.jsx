import React from 'react'
import image2 from '../images/megaerica_Carbonated_perfume_in_a_bottle_6a49a0c4-198a-4f33-a2d6-a0c8eee0c9d8ddef 1.png'

const Section2 = () => {
    return (
        <section className="py-5" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: 'black' }}>
            <div className="container">
                <div className="row align-items-center min-vh-50">
                    {/* Left Side - Image */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className="text-center">
                            <div className="position-relative">
                                <img 
                                    src={image2} 
                                    alt="Premium Perfume" 
                                    className="img-fluid rounded-3 shadow-lg"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        maxHeight: '500px',
                                        objectFit: 'contain',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="col-lg-6 col-md-12">
                        <div className="text-center text-lg-start ps-lg-4">
                            {/* Heading */}
                            <h2 
                                className="display-5 fw-bold mb-4 text-center"
                                style={{
                                    color: 'white',
                                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                    lineHeight: '1.3'
                                }}
                            >
                                Our Values
                            </h2>
                            
                            {/* Description */}
                            <p 
                                className="lead mb-4"
                                style={{
                                    color: 'white',
                                    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                                    lineHeight: '1.7',
                                    textAlign: 'justify'
                                }}
                            >
                                Discover the essence of triumph with our exclusive Victory Scented collection. 
                                Each fragrance is meticulously crafted to embody the spirit of success, 
                                confidence, and elegance. From the first spritz to the lasting impression, 
                                our perfumes tell your story of achievement.
                            </p>
                            
                            <p 
                                className="mb-4"
                                style={{
                                    color: 'white',
                                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                                    lineHeight: '1.6',
                                    textAlign: 'justify'
                                }}
                            >
                                Whether you're conquering boardrooms or celebrating life's victories, 
                                our signature scents provide the perfect accompaniment to your journey. 
                                Experience luxury that speaks to your victorious spirit and leaves an 
                                unforgettable mark wherever you go.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2