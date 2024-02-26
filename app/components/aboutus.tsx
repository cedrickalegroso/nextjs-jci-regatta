// import img from 'next/img';

const AboutUs: React.FC = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 position-relative">
            <div
              className="row align-items-center position-relative md-mb-15"
              data-anime='{ "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div
                className="col-md-5 sm-mb-30px"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
              >
                <img
                  className="w-100"
                  src="https://via.placeholder.com/421x524"
                  alt=""
                />
              </div>
              <div
                className="col-lg-7 col-md-7 sm-mb-30px text-end"
                data-bottom-top="transform: translateY(-30px)"
                data-top-bottom="transform: translateY(30px)"
              >
                <img
                  src="https://via.placeholder.com/261x313"
                  alt=""
                  className="box-shadow-quadruple-large md-w-100"
                />
              </div>
              <div
                className="w-50 sm-w-100 overflow-hidden position-absolute sm-position-relative left-140px bottom-minus-200px sm-bottom-0px sm-left-0px p-0 sm-ps-15px sm-pe-15px"
                data-shadow-animation="true"
                data-animation-delay="100"
                data-bottom-top="transform: translateY(20px)"
                data-top-bottom="transform: translateY(-20px)"
              >
                <img
                  src="https://via.placeholder.com/500x614"
                  alt=""
                  className="box-shadow-quadruple-large w-100"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6 offset-xl-1 md-mt-20 sm-mt-0"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-gradient-base-color fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                15 Years and Beyond
              </span>
            </div>
            <h4 className="text-dark-gray alt-font fw-600 ls-minus-2px mb-20px">
              JCI Regattas 15th Foundation of Excellence
            </h4>
            <p className="w-90 md-w-100 mb-35px sm-mb-20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              maximus, neque eget elementum dictum, purus urna porttitor metus,
              eu tempus sem ligula a metus. Suspendisse venenatis mollis ex,
              eget pulvinar tellus vehicula a. Ut id dui magna. Praesent ornare,
              ex sit amet tristique finibus,
            </p>
            <a
              href="/"
              className="btn btn-large btn-dark-gray btn-switch-text btn-box-shadow border-1 left-icon me-10px sm-mb-15px sm-mt-15px"
            >
              <span>
                <span>
                  <i className="feather icon-feather-briefcase"></i>
                </span>
                <span className="btn-double-text" data-text="About Us">
                  Learn More
                </span>
              </span>
            </a>
            <a
              href="/"
              className="btn btn-large btn-transparent-light-gray border-1 btn-switch-text left-icon sm-mb-15px sm-mt-15px"
            >
              <span>
                <span>
                  <i className="feather icon-feather-edit"></i>
                </span>
                <span className="btn-double-text" data-text="Join Now">
                  Join Now{" "}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
