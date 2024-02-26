// import img from 'next/img';

const People: React.FC = () => {
  return (
    <section className="pb-0">
      <div className="container-fluid p-0">
        <div
          className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 g-0"
          data-anime='{ "el": "childs", "translateY": [30, 0], "rotateX":[30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col team-style-10 md-ps-15px md-pe-15px md-mb-30px">
            <figure className="mb-0 position-relative overflow-hidden">
              {/* <img src="https://via.placeholder.com/480x605" className="w-100" alt="" /> */}
              <img
                src="https://via.placeholder.com/480x605"
                className="hover-switch-img"
                alt=""
              />
              <figcaption className="w-100 h-100 d-flex flex-wrap">
                <div className="social-icon d-flex flex-column flex-shrink-1 mb-auto p-30px ms-auto">
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="text-white bg-dark-gray"
                  >
                    <i className="fa-brands fa-twitter icon-small"></i>
                  </a>
                </div>
                <div className="team-member-strip w-100 mt-auto d-flex align-items-center pt-15px pb-15px ps-30px pe-30px bg-white">
                  <span className="team-member-name fw-600 alt-font text-dark-gray fs-18 ls-minus-05px">
                    Jeremy dupont
                  </span>
                  <span className="member-designation fs-15 lh-20 ms-auto alt-font">
                    Designer
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="col team-style-10 mt-20px md-mt-0 md-ps-15px md-pe-15px md-mb-30px">
            <figure className="mb-0 position-relative overflow-hidden">
              {/* <img src="https://via.placeholder.com/480x605" className="w-100" alt="" /> */}
              <img
                src="https://via.placeholder.com/480x605"
                className="hover-switch-img"
                alt=""
              />
              <figcaption className="w-100 h-100 d-flex flex-wrap">
                <div className="social-icon d-flex flex-column flex-shrink-1 mb-auto p-30px ms-auto">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="text-white bg-dark-gray"
                  >
                    <i className="fa-brands fa-facebook-f icon-small"></i>
                  </a>
                </div>
                <div className="team-member-strip w-100 mt-auto d-flex align-items-center pt-15px pb-15px ps-30px pe-30px bg-white">
                  <span className="team-member-name fw-600 alt-font text-dark-gray fs-18 ls-minus-05px">
                    Matthew taylor
                  </span>
                  <span className="member-designation fs-15 lh-20 ms-auto alt-font">
                    Writer
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="col team-style-10 mt-40px md-mt-0 md-ps-15px md-pe-15px sm-mb-30px">
            <figure className="mb-0 position-relative overflow-hidden">
              {/* <img src="https://via.placeholder.com/480x605" className="w-100" alt="" /> */}
              <img
                src="https://via.placeholder.com/480x605"
                className="hover-switch-img"
                alt=""
              />
              <figcaption className="w-100 h-100 d-flex flex-wrap">
                <div className="social-icon d-flex flex-column flex-shrink-1 mb-auto p-30px ms-auto">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="text-white bg-dark-gray"
                  >
                    <i className="fa-brands fa-linkedin-in icon-small"></i>
                  </a>
                </div>
                <div className="team-member-strip w-100 mt-auto d-flex align-items-center pt-15px pb-15px ps-30px pe-30px bg-white">
                  <span className="team-member-name fw-600 alt-font text-dark-gray fs-18 ls-minus-05px">
                    Herman miller
                  </span>
                  <span className="member-designation fs-15 lh-20 ms-auto alt-font">
                    Manager
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="col team-style-10 mt-60px md-mt-0 md-ps-15px md-pe-15px">
            <figure className="mb-0 position-relative overflow-hidden">
              {/* <img src="https://via.placeholder.com/480x605" className="w-100" alt="" /> */}
              <img
                src="https://via.placeholder.com/480x605"
                className="hover-switch-img"
                alt=""
              />
              <figcaption className="w-100 h-100 d-flex flex-wrap">
                <div className="social-icon d-flex flex-column flex-shrink-1 mb-auto p-30px ms-auto">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="text-white bg-dark-gray"
                  >
                    <i className="fa-brands fa-instagram icon-small"></i>
                  </a>
                </div>
                <div className="team-member-strip w-100 mt-auto d-flex align-items-center pt-15px pb-15px ps-30px pe-30px bg-white">
                  <span className="team-member-name fw-600 alt-font text-dark-gray fs-18 ls-minus-05px">
                    Jessica dover
                  </span>
                  <span className="member-designation fs-15 lh-20 ms-auto alt-font">
                    Designer
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
