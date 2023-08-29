import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-cas">
      <div className="container-fluid">
        <button className="ms-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand me-4" href="#">CAS</a>
        
      </div>
    </nav>
  )
}

export default Navbar