import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav style={styles.nav}>
    //   <ul style={styles.navList}>
    //   <li style={styles.navItem}><Link style={styles.navLink} to="/">Listing </Link></li>
    //     <li style={styles.navItem}><Link style={styles.navLink} to="/upload">Upload</Link></li>
    //   </ul>
    // </nav>

    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="btn fs-3 text-primary" to="/">Media</Link>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <Link className='btn btn-primary' to="/upload">
        <i class="bi bi-cloud-upload"></i>
        <span className='mx-2'>Upload</span></Link>
      </div>
 
   </nav>


  );
};

export default Navbar;
