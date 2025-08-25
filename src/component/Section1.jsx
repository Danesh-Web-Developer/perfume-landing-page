import React from 'react'

const Section1 = () => {
    return (
        <section
            className="position-relative py-5"
            style={{
                minHeight: '70vh',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("src/images/welcome note (1).png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                fontFamily: 'Poppins, sans-serif'
            }}
        >
            {/* Content Container */}
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        {/* Main Heading */}
                        <h1
                            className="display-3 fw-bold text-white mb-4 animate__animated animate__fadeInUp"
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                fontSize: 'clamp(1rem, 5vw, 2rem)',
                                lineHeight: '1.2'
                            }}
                        >
                            Welcome to Local Face
                        </h1>

                        {/* Description */}
                        <p
                            className="lead text-white mb-5 animate__animated animate__fadeInUp animate__delay-1s"
                            style={{
                                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                                fontSize: 'clamp(1rem, 2.5vw, 1rem)',
                                maxWidth: '800px',
                                margin: '0 auto 2rem auto',
                                lineHeight: '1.6'
                            }}
                        >
                            Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1