import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top" style={{fontFamily: 'Poppins, sans-serif', backgroundColor: '#121111'}}>
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold" style={{color: '#AB572D'}} href="#">
          Local Face
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: '4rem'}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            {/* <li className="nav-item"> */}
              <a className="nav-link" href="#">
                About Us
              </a>
            {/* </li> */}
            {/* <li className="nav-item"> */}
              <a className="nav-link" href="#">
                Services
              </a>
            {/* </li> */}
            {/* <li className="nav-item"> */}
              <a className="nav-link" href="#">
                Blog
              </a>
            {/* </li> */}
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3 mb-3 mb-lg-0" role="search">
            <div className="input-group">
              <input 
                className="form-control navbar-search-input" 
                type="search" 
                placeholder="Search perfumes..." 
                aria-label="Search"
                style={{backgroundColor: '#495057', borderColor: '#6c757d', color: 'white'}}
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center">
            {/* User Account */}
            <a href="#" className="text-decoration-none me-3">
              <i className="fas fa-user text-white fs-5"></i>
            </a>
            
            {/* Wishlist */}
            <a href="#" className="text-decoration-none me-3 position-relative">
              <i className="fas fa-heart text-white fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  
                </span>
            </a>
            
            {/* Shopping Cart */}
            <a href="#" className="text-decoration-none position-relative">
              <i className="fas fa-shopping-cart text-white fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;