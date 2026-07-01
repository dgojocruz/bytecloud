function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span className="site-logo">BYTECLOUD</span>
        <p>Reach out for tailored IT solutions today.</p>
        <a href="mailto:sales@bytecloud.com.ph">sales@bytecloud.com.ph</a>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Bytecloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
