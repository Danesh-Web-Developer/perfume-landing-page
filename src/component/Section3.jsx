import React, { useState, useEffect } from 'react'

const Section3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Data for the sliding sets (each set contains 4 boxes)
    const slidesSets = [
        // First set of 4 boxes
        [
            {
                id: 1,
                image: 'src/images/Old_fashion_balck_and_gold_color_perfume__3_-removebg-preview 1.png',
                title: 'Luxurious Elixir',
                description: '$ 140.00 100ml'
            },
            {
                id: 2,
                image: 'src/images/Old_fashion_balck_and_gold_color_perfume_png_image-removebg-preview (1) 1.png',
                title: 'Victory Essence',
                description: '$ 160.00 100ml'
            },
            {
                id: 3,
                image: 'src/images/Old_fashion_balck_and_gold_color_perfume-removebg-preview 1.png',
                title: 'Elegant Aura',
                description: '$ 180.00 100ml'
            },
            {
                id: 4,
                image: 'src/images/Old_fashion_gold_color_perfume__1_-removebg-preview 1.png',
                title: 'Timeless Beauty',
                description: '$ 200.00 100ml'
            }
        ],
        // Second set of 4 boxes
        [
            {
                id: 5,
                image: 'src/images/Old_fashion_balck_and_gold_color_perfume_png_image-removebg-preview (1) 1.png',
                title: 'Royal Essence',
                description: '$ 220.00 100ml'
            },
            {
                id: 6,
                image: 'src/images/Old_fashion_gold_color_perfume__1_-removebg-preview 1.png',
                title: 'Modern Classic',
                description: '$ 160.00 100ml'
            },
            {
                id: 7,
                image: 'src/images/Old_fashion_balck_and_gold_color_perfume__3_-removebg-preview 1.png',
                title: 'Signature Series',
                description: '$ 250.00 100ml'
            },
            {
                id: 8,
                image: 'src/images/Old_fashion_balck_and_gold_color_perfume-removebg-preview 1.png',
                title: 'Premium Blend',
                description: '$ 260.00 100ml'
            }
        ]
    ]

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesSets.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slidesSets.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slidesSets.length) % slidesSets.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <section className="py-5" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#1a1a1a' }}>
            <div className="container">
                {/* Top Heading */}
                <div className="text-center mb-5">
                    <h2 
                        className="display-4 fw-bold mb-3"
                        style={{
                            color: 'white',
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            lineHeight: '1.2'
                        }}
                    >
                        Best selling products
                    </h2>
                </div>

                {/* Sliding Four Boxes Container */}
                <div className="position-relative">
                    {/* Slider Container */}
                    <div className="overflow-hidden" style={{ borderRadius: '20px' }}>
                        <div 
                            className="d-flex"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                                transition: 'transform 0.6s ease-in-out',
                                minHeight: 'auto'
                            }}
                        >
                            {slidesSets.map((slideSet, slideIndex) => (
                                <div 
                                    key={slideIndex}
                                    className="flex-shrink-0"
                                    style={{ width: '100%', minWidth: '100%' }}
                                >
                                    <div className="row g-3 g-md-4 mx-0">
                                        {slideSet.map((box,) => (
                                            <div key={box.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
                                                <div 
                                                    className="card border-0"
                                                    style={{
                                                        borderRadius: '20px',
                                                        overflow: 'hidden',
                                                        transition: 'all 0.3s ease',
                                                        minHeight: '300px',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        backgroundColor: 'black',
                                                        height: '55vh'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-10px)'
                                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)'
                                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
                                                    }}
                                                >
                                                    {/* Image */}
                                                    <div 
                                                        className="d-flex align-items-center justify-content-center"
                                                        style={{
                                                            height: '220px',
                                                            backgroundColor: 'black',
                                                            padding: '15px',
                                                            paddingTop: '30px'
                                                        }}
                                                    >
                                                        <img 
                                                            src={box.image}
                                                            alt={box.title}
                                                            style={{
                                                                width: '220px',
                                                                height: '220px',
                                                                objectFit: 'cover',
                                                                backgroundColor: 'transparent',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                    
                                                    {/* Content */}
                                                    <div className="card-body p-3 p-md-4 flex-grow-1 d-flex flex-column">
                                                        <h5 
                                                            className="card-title mb-3 text-center"
                                                            style={{
                                                                color: '#fff',
                                                                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)'
                                                            }}
                                                        >
                                                            {box.title}
                                                        </h5>
                                                        <p 
                                                            className="card-text mb-4 text-center"
                                                            style={{
                                                                color: '#AB572D',
                                                                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                                                                lineHeight: '1.6'
                                                            }}
                                                        >
                                                            {box.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                {/* Side Navigation Buttons */}
                <div className="row mt-4 g-2">
                    <div className="col-6">
                        <button 
                            className="btn btn-outline-light w-100 py-2"
                            onClick={prevSlide}
                            style={{
                                borderColor: '#AB572D',
                                borderRadius: '25px',
                                fontSize: 'clamp(0.7rem, 1.8vw, 1.1rem)',
                                transition: 'all 0.3s ease',
                                borderWidth: '2px',
                                padding: '8px 4px',
                                minHeight: '45px'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#AB572D'
                                e.target.style.transform = 'translateY(-2px)'
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                                e.target.style.color = 'white'
                                e.target.style.transform = 'translateY(0)'
                            }}
                        >
                            <i className="fas fa-chevron-left me-1 me-md-2"></i>
                            <span className="d-none d-sm-inline">Previous Collection</span>
                            <span className="d-inline d-sm-none">Previous</span>
                        </button>
                    </div>
                    <div className="col-6">
                        <button 
                            className="btn btn-outline-light w-100 py-2"
                            onClick={nextSlide}
                            style={{
                                borderColor: '#AB572D',
                                borderRadius: '25px',
                                fontSize: 'clamp(0.7rem, 1.8vw, 1.1rem)',
                                transition: 'all 0.3s ease',
                                borderWidth: '2px',
                                padding: '8px 4px',
                                minHeight: '45px'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#AB572D'
                                e.target.style.transform = 'translateY(-2px)'
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                                e.target.style.color = 'white'
                                e.target.style.transform = 'translateY(0)'
                            }}
                        >
                            <span className="d-none d-sm-inline">Next Collection</span>
                            <span className="d-inline d-sm-none">Next</span>
                            <i className="fas fa-chevron-right ms-1 ms-md-2"></i>
                        </button>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="text-center mt-4">
                    {slidesSets.map((_, index) => (
                        <button
                            key={index}
                            className={`btn btn-sm mx-1 ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: currentSlide === index ? '#AB572D' : '#666',
                                transition: 'all 0.3s ease'
                            }}
                        ></button>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Section3