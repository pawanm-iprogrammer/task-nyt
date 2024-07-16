import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <h3>&copy; 2024 The New York Times Company</h3>

        <div className="personal-container">
          <h3 className="personal-info">
            <div className="personal-links">
              <a
                className="social-link"
              >
                <span>GitHub</span>
              </a>
            </div>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
