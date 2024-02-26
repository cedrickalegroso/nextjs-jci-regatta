const Timeline: React.FC = () => {
  return (
    <section className="pt-0 border-top border-color-extra-medium-gray mt-6 md-mt-0 sm-border-top-0">
      <div className="container">
        <div
          className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-0"
          data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col process-step-style-06 last-paragraph-no-margin hover-box sm-mb-50px">
            <div className="process-step-icon-box position-relative top-minus-14px">
              <span className="progress-step-separator bg-light-gray w-100 separator-line-1px opacity-1"></span>
              <div className="step-box d-flex align-items-center justify-content-center bg-white border-radius-100 w-25px h-25px position-relative border border-color-extra-medium-gray box-shadow-large">
                <span className="w-7px h-7px bg-dark-gray border-radius-100"></span>
              </div>
            </div>
            <span className="d-block alt-font text-dark-gray fw-600 mb-10px mt-15px fs-22 lh-28 ls-minus-05px w-60 lg-w-75 md-w-100">
              JCI is present in over 120+ countries
            </span>
            <p className="w-60 lg-w-75 md-w-100 sm-w-100">
              Worldwide community of nearly 5,000 chapters in more than 120
              countries with approximately 200,000 young active citizens and
              leaders as its members who has shared beliefs and purpose..
            </p>
          </div>

          <div className="col process-step-style-06 last-paragraph-no-margin hover-box sm-mb-50px">
            <div className="process-step-icon-box position-relative top-minus-14px">
              <span className="progress-step-separator bg-light-gray w-100 separator-line-1px opacity-1"></span>
              <div className="step-box d-flex align-items-center justify-content-center bg-white border-radius-100 w-25px h-25px position-relative border border-color-extra-medium-gray box-shadow-large">
                <span className="w-7px h-7px bg-dark-gray border-radius-100"></span>
              </div>
            </div>
            <span className="d-block alt-font text-dark-gray fw-600 mb-10px mt-15px fs-22 lh-28 ls-minus-05px w-60 lg-w-75 md-w-100">
              Over 191 Local Organizations around the country
            </span>
            <p className="w-60 lg-w-75 md-w-100 sm-w-100">
              In 24 Regions around the country and growing
            </p>
          </div>

          <div className="col process-step-style-06 last-paragraph-no-margin hover-box">
            <div className="process-step-icon-box position-relative top-minus-14px">
              <span className="progress-step-separator bg-light-gray w-100 separator-line-1px opacity-1"></span>
              <div className="step-box d-flex align-items-center justify-content-center bg-white border-radius-100 w-25px h-25px position-relative border border-color-extra-medium-gray box-shadow-large">
                <span className="w-7px h-7px bg-dark-gray border-radius-100"></span>
              </div>
            </div>
            <span className="d-block alt-font text-dark-gray fw-600 mb-10px mt-15px fs-22 lh-28 ls-minus-05px w-60 lg-w-75 md-w-100">
              Over 5 Main Areas
            </span>
            <p className="w-60 lg-w-75 md-w-100 sm-w-100">
              With young people ages 18 to 40, members creating positive change
              in themselves and their community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
