// import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg header-light bg-white header-reverse glass-effect">
        <div className="container-fluid">
          <div className="col-auto col-lg-2 me-lg-0 me-auto">
            <a className="navbar-brand" href="demo-branding-agency.html">
              <img
                src="/images/logos/JCIRegattaLogo.PNG"
                alt=""
                className="default-logo"
              />
              <img
                src="/images/logos/JCIRegattaLogo.PNG"
                alt=""
                className="alt-logo"
              />
              <img
                src="/images/logos/JCIRegattaLogo.PNG"
                alt=""
                className="mobile-logo"
              />
            </a>
          </div>
          <div className="col-auto ms-auto md-ms-0 menu-order position-static">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav alt-font">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto text-end d-none d-sm-flex">
            <div className="header-icon">
              <div className="header-button">
                <a
                  href="mailto:info@domain.com"
                  className="btn border-1 btn-transparent-light-gray btn-medium left-icon btn-switch-text"
                >
                  <span>
                    <span className="btn-double-text" data-text="Join Now">
                      Be a Member
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
