import React from 'react'

const Section6 = () => {
    const cardData = [
        {
            id: 1,
            image: 'src/images/Group 14.png',
            title: 'The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir',
            description: 'Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.'
        },
        {
            id: 2,
            image: 'src/images/Group 15.png',
            title: 'The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories',
            description: 'Rose, often referred to as the "Queen of Flowers," has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.'
        },
        {
            id: 3,
            image: 'src/images/Group 16.png',
            title: 'The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance',
            description: 'Rose, often referred to as the "Queen of Flowers," has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.'
        }
    ]

    return (
        <section className="py-3 py-md-5" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#1a1a1a' }}>
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-3 mb-md-5">
                    <h2 
                        className="display-4 fw-bold mb-2 mb-md-3"
                        style={{
                            color: 'white',
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            lineHeight: '1.2'
                        }}
                    >
                        Latest Articles
                    </h2>
                </div>

                {/* Flip Cards */}
                <div className="row g-3 g-md-4">
                    {cardData.map((card) => (
                        <div key={card.id} className="col-lg-4 col-md-6 col-12 mb-3 mb-md-0">
                            <div 
                                className="flip-card"
                                style={{
                                    backgroundColor: 'transparent',
                                    width: '100%',
                                    height: 'clamp(350px, 50vw, 400px)',
                                    perspective: '1000px'
                                }}
                            >
                                <div 
                                    className="flip-card-inner"
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        textAlign: 'center',
                                        transition: 'transform 0.8s',
                                        transformStyle: 'preserve-3d',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(180deg)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(0deg)'
                                    }}
                                >
                                    {/* Front Side */}
                                    <div 
                                        className="flip-card-front"
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            backfaceVisibility: 'hidden',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                        }}
                                    >
                                        <img 
                                            src={card.image}
                                            alt={card.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    {/* Back Side */}
                                    <div 
                                        className="flip-card-back"
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            backfaceVisibility: 'hidden',
                                            backgroundColor: '#2a2a2a',
                                            color: 'white',
                                            transform: 'rotateY(180deg)',
                                            borderRadius: '10px',
                                            padding: 'clamp(20px, 4vw, 30px)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                        }}
                                    >
                                        <h3 
                                            style={{
                                                color: '#AB572D',
                                                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                                                fontWeight: '700',
                                                marginBottom: 'clamp(15px, 3vw, 20px)',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {card.title}
                                        </h3>
                                        
                                        <p 
                                            style={{
                                                color: '#E0E0E0',
                                                fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                                                lineHeight: '1.6',
                                                marginBottom: 'clamp(20px, 4vw, 25px)',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {card.description}
                                        </p>
                                        
                                        <button 
                                            className="btn"
                                            style={{
                                                backgroundColor: '#AB572D',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '10px',
                                                padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)',
                                                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                                                fontWeight: '600',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 4px 15px rgba(171, 87, 45, 0.3)',
                                                minHeight: '44px'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = '#8B4513'
                                                e.target.style.transform = 'translateY(-2px)'
                                                e.target.style.boxShadow = '0 6px 20px rgba(171, 87, 45, 0.4)'
                                            }}
                                            onMouseOut={(e) => {
                                                // e.target.style.backgroundColor = '#AB572D'
                                                e.target.style.transform = 'translateY(0)'
                                                e.target.style.boxShadow = '0 4px 15px rgba(171, 87, 45, 0.3)'
                                            }}
                                        >
                                            <span className="d-none d-sm-inline">Read More</span>
                                            <span className="d-inline d-sm-none">Read</span>
                                            <i className="fas fa-arrow-right ms-1 ms-sm-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section6