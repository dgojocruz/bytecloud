import { NavLink } from 'react-router-dom';
import logo from '../../assets/brand/bytecloud-logo.svg';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-logo-link" end>
        <img src={logo} alt="Bytecloud" className="site-logo" />
      </NavLink>
      <nav aria-label="Primary">
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
