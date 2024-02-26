// import Image from 'next/image';

const Footer: React.FC = () => {
  const style = {
    backgroundImage: "url(images/demo-branding-agency-pattern.svg)",
  };

  return (
    <footer className="bg-charcoal-blue pb-4 sm-pb-50px" style={style}>
      <div className="container">
        <div className="row mb-6">
          <div className="col-lg-5 col-md-6 sm-mb-30px order-2 order-md-1">
            <h3 className="text-white fw-500 alt-font mb-50px ls-minus-1px sm-mb-30px">
              Developing Leaders For a Changing World
            </h3>
            <div className="row">
              <div className="col-lg-5 col-6">
                <span className="alt-font fs-14 text-uppercase d-block text-white ls-1px lh-24">
                  Call us
                </span>
                <a href="tel:12345678910">+1 234 567 8910</a>
              </div>
              <div className="col-lg-5 col-6">
                <span className="alt-font fs-14 text-uppercase d-block text-white ls-1px lh-24">
                  Send a message
                </span>
                <a href="mailto:jciregatta09@gmail.com">
                  jciregatta09@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 offset-lg-1 col-6 order-3 order-md-2">
            <span className="alt-font fs-14 text-uppercase mb-5px d-block text-white ls-1px">
              Company
            </span>
            <ul>
              <li>
                <a href="demo-branding-agency.html">Home</a>
              </li>
              <li>
                <a href="demo-branding-agency-about.html">About</a>
              </li>
              <li>
                <a href="demo-branding-agency-services.html">Partners</a>
              </li>
              <li>
                <a href="demo-branding-agency-portfolio.html">Donate Now</a>
              </li>
              <li>
                <a href="demo-branding-agency-contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6 order-3 order-md-3">
            <span className="alt-font fs-14 text-uppercase mb-5px d-block text-white ls-1px">
              Follow Us
            </span>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/jciregattailoilo"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jciregattailoilo"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 order-1 order-md-4 sm-mb-30px">
            <a href="/" className="footer-logo">
              <img src="images/logos/JCIRegattaLogo.PNG" alt="" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 last-paragraph-no-margin">
            <p className="fs-13 lh-22 w-95 sm-w-100">
              This site is protected by reCAPTCHA and the Google privacy policy
              and terms of service apply. You must not use this website if you
              disagree with any of these website standard terms and conditions.
            </p>
          </div>
          <div className="col-md-5 text-md-end sm-mt-15px last-paragraph-no-margin">
            <p className="fs-13 lh-22">
              &copy; 2024 JCI Regatta is Powered by{" "}
              <a
                href="https://www.prometheus.ph/"
                target="_blank"
                className="text-decoration-line-bottom text-white"
              >
                Prometheus
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
