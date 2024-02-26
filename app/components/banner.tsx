const Banner: React.FC = () => {
  const placeHolder = {
    backgroundImage: "url(https://via.placeholder.com/1149x1050)",
  };

  return (
    <section className="p-0 full-screen ipad-top-space-margin position-relative overflow-hidden md-h-auto">
      <div className="container-fluid p-0 h-100 position-relative">
        <div className="row h-100 g-0">
          <div className="col-xl-5 col-lg-6 d-flex justify-content-center flex-column ps-10 xxl-ps-5 xl-ps-2 md-ps-0 position-relative order-2 order-lg-1">
            <div className="vertical-title-center align-items-center w-75px justify-content-center position-absolute h-auto d-none d-md-flex">
              <div
                className="title fs-16 alt-font text-dark-gray fw-700 text-uppercase ls-05px text-uppercase"
                data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["JCI REGATTA ILOILO"], "duration": 400, "delay": 0, "speed": 50, "easing": "easeOutQuad" }'
              ></div>
            </div>
            <div
              className="border-start border-color-extra-medium-gray ps-60px ms-100px lg-ps-30px lg-ms-70px position-relative z-index-9 sm-ps-30px sm-pe-30px sm-ms-0 border-0"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <h1 className="text-dark-gray fw-600 alt-font outside-box-right-10 xl-outside-box-right-15 ls-minus-4px sm-ls-minus-2px md-me-0">
                DEVELOPING LEADERS FOR A CHANGING WORLD
              </h1>
              <p className="w-75 mb-35px lg-w-90 sm-w-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="btn btn-extra-large btn-gradient-fuel-yellow-blue fw-400"
              >
                Volunteer Now
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 position-relative swiper-number-pagination-progress md-h-500px order-1 order-lg-2 md-mb-50px">
            <div
              className="swiper h-100 banner-slider magic-cursor drag-cursor"
              data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-number-line-pagination", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "stopOnLastSlide": true, "disableOnInteraction": false },"keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "fade" }'
              data-swiper-number-pagination-progress="true"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    className="bg-black position-absolute left-0px top-0px w-100 h-100 cover-background background-position-center-top"
                    style={placeHolder}
                  ></div>
                </div>

                <div className="swiper-slide">
                  <div
                    className="bg-black position-absolute left-0px top-0px w-100 h-100 cover-background background-position-center-top"
                    style={placeHolder}
                  ></div>
                </div>

                <div className="swiper-slide">
                  <div
                    className="bg-black position-absolute left-0px top-0px w-100 h-100 cover-background background-position-center-top"
                    style={placeHolder}
                  ></div>
                </div>
              </div>

              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets d-block d-sm-none"></div>
            </div>

            <div className="swiper-pagination-wrapper d-none d-lg-flex align-items-center justify-content-center position-absolute bottom-40px md-bottom-30px sm-bottom-20px left-minus-45 md-left-30px sm-left-20px z-index-9">
              <div className="number-prev fs-14 fw-600 text-dark-gray"></div>
              <div className="swiper-pagination-progress bg-extra-medium-gray">
                <span className="swiper-progress"></span>
              </div>
              <div className="number-next fs-14 fw-600 text-dark-gray"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
