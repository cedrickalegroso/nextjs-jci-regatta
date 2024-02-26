const Story: React.FC = () => {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="row mb-6">
          <div
            className="col-xl-5 col-md-6"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-gradient-base-color fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                Rooted in Faith
              </span>
            </div>
            <h4 className="text-dark-gray alt-font fw-600 w-90 ls-minus-2px">
              The JCI Regatta Story
            </h4>
            <p className="w-100 mb-35px lg-w-90 sm-w-100">
              JCI Regatta had its humble beginnings at Santa Maria Parish Church
              where its founders have met path to establish the local
              organization. 2009 National President Fulbert Woo, 2009 JCI Iloilo
              President Rex Chua, and JCI Regatta Charter President Elmer Usi
              invited the members of the Santa Maria Parish and their network of
              young individuals to join JCI Regatta.
            </p>
          </div>
          <div className="offset-xl-1 col-xl-5 col-md-6">
            <div
              className="accordion accordion-style-02"
              id="accordion-style-02"
              data-active-icon="icon-feather-minus"
              data-inactive-icon="icon-feather-plus"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="accordion-item active-accordion">
                <div className="accordion-header border-bottom border-color-dark-gray">
                  <a
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-style-02-01"
                    aria-expanded="true"
                    data-bs-parent="#accordion-style-02"
                  >
                    <div className="accordion-title mb-0 position-relative text-dark-gray">
                      <i className="feather icon-feather-minus"></i>
                      <span className="fw-600 alt-font fs-18">
                        What is JCI Regatta Iloilo?
                      </span>
                    </div>
                  </a>
                </div>
                <div
                  id="accordion-style-02-01"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-body last-paragraph-no-margin border-bottom border-color-dark-gray">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur maximus, neque eget elementum dictum, purus urna
                      porttitor metus, eu tempus sem ligula a metus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header border-bottom border-color-dark-gray">
                  <a
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-style-02-02"
                    aria-expanded="false"
                    data-bs-parent="#accordion-style-02"
                  >
                    <div className="accordion-title mb-0 position-relative text-dark-gray">
                      <i className="feather icon-feather-plus"></i>
                      <span className="fw-600 alt-font fs-18">
                        How do I become a member?
                      </span>
                    </div>
                  </a>
                </div>
                <div
                  id="accordion-style-02-02"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-body last-paragraph-no-margin border-bottom border-color-dark-gray">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur maximus, neque eget elementum dictum, purus urna
                      porttitor metus, eu tempus sem ligula a metus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header border-bottom border-color-transparent">
                  <a
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-style-02-03"
                    aria-expanded="false"
                    data-bs-parent="#accordion-style-02"
                  >
                    <div className="accordion-title mb-0 position-relative text-dark-gray">
                      <i className="feather icon-feather-plus"></i>
                      <span className="fw-600 alt-font fs-18">
                        How can I find out more?
                      </span>
                    </div>
                  </a>
                </div>
                <div
                  id="accordion-style-02-03"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur maximus, neque eget elementum dictum, purus urna
                      porttitor metus, eu tempus sem ligula a metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-lg-4 row-cols-md-2 counter-style-04"
          data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col last-paragraph-no-margin md-mb-30px text-center text-md-start">
            <span className="alt-font fw-600 d-block mb-5px text-dark-gray fs-18">
              Founded
            </span>
            <div className="separator-line-1px bg-extra-medium-gray w-90 mt-25px mb-25px sm-w-100"></div>
            <h3
              className="vertical-counter d-inline-flex alt-font text-dark-gray fw-700 ls-minus-2px sm-ls-minus-1px sm-mb-0"
              data-text=""
              data-to="2009"
            ></h3>
          </div>

          <div className="col last-paragraph-no-margin md-mb-30px text-center text-md-start">
            <span className="alt-font fw-600 d-block mb-5px text-dark-gray fs-18">
              Chapters
            </span>
            <div className="separator-line-1px bg-extra-medium-gray w-90 mt-25px mb-25px sm-w-100"></div>
            <h3
              className="vertical-counter d-inline-flex alt-font text-dark-gray fw-700 ls-minus-2px sm-ls-minus-1px sm-mb-0"
              data-text="+"
              data-to="5000"
            ></h3>
          </div>

          <div className="col last-paragraph-no-margin md-mb-30px text-center text-md-start">
            <span className="alt-font fw-600 d-block mb-5px text-dark-gray fs-18">
              Countries
            </span>
            <div className="separator-line-1px bg-extra-medium-gray w-90 mt-25px mb-25px sm-w-100"></div>
            <h3
              className="vertical-counter d-inline-flex alt-font text-dark-gray fw-700 ls-minus-2px sm-ls-minus-1px sm-mb-0"
              data-text="+"
              data-to="120"
            ></h3>
          </div>

          <div className="col last-paragraph-no-margin sm-mb-30px text-center text-md-start">
            <span className="alt-font fw-600 d-block mb-5px text-dark-gray fs-18">
              Active Citizens and Leaders
            </span>
            <div className="separator-line-1px bg-extra-medium-gray w-90 mt-25px mb-25px sm-w-100"></div>
            <h3
              className="vertical-counter d-inline-flex alt-font text-dark-gray fw-700 ls-minus-2px sm-ls-minus-1px sm-mb-0"
              data-text="+"
              data-to="200,000"
            ></h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
