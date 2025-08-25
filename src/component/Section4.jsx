import React from 'react'

const Section4 = () => {
    const galleryItems = [
        {
            id: 1, image: 'src/images/Group 14.png',
            title: 'Designer Delights Collection',
            colClass: 'col-lg-5 col-md-6 col-12'
        },
        { 
            id: 2, image: 'src/images/Group 16.png',
             title: 'Travel Essentials Collection',
              colClass: 'col-lg-7 col-md-6 col-12' 
        },

        { 
            id: 3, image: 'src/images/Group 17.png',
             title: 'Special Occasions Collection',
              colClass: 'col-lg-6 col-md-6 col-12' 
        },

        { 
            id: 4, image: 'src/images/Group 15.png',
             title: 'Seasonal Sensations Collection',
              colClass: 'col-lg-6 col-md-6 col-12' 
        },

        {   
            id: 5, image: 'src/images/Group 18.png',
             title: 'Vintage Treasures Collection',
              colClass: 'col-lg-4 col-md-6 col-12' 
        },

        { 
            id: 6, image: 'src/images/Group 19.png',
             title: 'Limited Edition Treasures',
              colClass: 'col-lg-4 col-md-6 col-12' 
        },

        { 
            id: 7, image: 'src/images/Group 20.png',
             title: 'Modern Classics Collection',
              colClass: 'col-lg-4 col-md-12 col-12' 
        }
    ]

    return (
        <section className="py-5" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#1a1a1a' }}>
            <div className="container">
                <div className="text-center mb-4 mb-md-5">
                    <h2 className="display-4 fw-bold mb-3" style={{ color: 'white', fontSize: 'clamp(1rem, 5vw, 2rem)', lineHeight: '1.2' }}>
                        Our Collection Gallery
                    </h2>
                </div>

                <div className="row g-3 g-md-4">
                    {galleryItems.map((item, index) => (
                        <div key={item.id} className={item.colClass}>
                            <div className="position-relative overflow-hidden" style={{
                                height: index < 4 ? 'clamp(250px, 40vw, 350px)' : 'clamp(220px, 35vw, 300px)',
                                backgroundColor: '#000'
                            }}>
                                <img src={item.image} alt={item.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                <div className="position-absolute" style={{
                                    bottom: '6px', left: '10px',
                                    padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 18px)', borderRadius: '8px'
                                }}>
                                    <p style={{ color: 'white', margin: 0, fontSize: index < 4 ? 'clamp(0.9rem, 2.5vw, 1rem)' : 'clamp(0.8rem, 2vw, 1rem)' }}>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section4