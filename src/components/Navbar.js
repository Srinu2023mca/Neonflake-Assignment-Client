import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link style={styles.navLink} to="/">Upload Page</Link></li>
        <li style={styles.navItem}><Link style={styles.navLink} to="/listing">Listing Page</Link></li>
        {/* <li style={styles.navItem}><Link style={styles.navLink} to="/videodisplay">Video Display</Link></li> */}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    padding: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Navbar;
