const Awards: React.FC = () => {
  const style = {
    backgroundImage: "url(images/jci/jcidemomap.png)",
  };

  return (
    <section className="big-section position-relative">
      <div
        className="background-position-center-top background-no-repeat position-absolute h-100 w-100 left-0px top-0px"
        style={style}
      ></div>
      <div className="container position-relative">
        <div
          className="row justify-content-center mb-8 lg-mb-8px"
          data-anime='{ "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col-xl-4 col-md-5">
            <h2 className="alt-font text-dark-gray mb-30px fw-600 ls-minus-3px textfix">
              International Awards
              <i className="bi bi-trophy-fill d-inline-block align-top ms-10px animation-zoom icon-very-medium text-yellow"></i>
            </h2>
            <div className="d-flex md-mb-25px">
              <div className="slider-one-slide-prev-1 text-dark-gray swiper-button-prev slider-navigation-style-04 border border-1 border-color-extra-medium-gray bg-white">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="slider-one-slide-next-1 text-dark-gray swiper-button-next slider-navigation-style-04 border border-1 border-color-extra-medium-gray bg-white">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-7 overflow-hidden offset-xl-2">
            <div
              className="swiper"
              data-slider-options='{ "slidesPerView": 1, "spaceBetween": 40, "loop": true, "autoplay": { "delay": 8000, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 1 }, "768": { "slidesPerView":1 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <h5 className="text-dark-gray mb-15px w-95 xl-w-100 lh-40 ls-minus-1px alt-font">
                    BEST NEW LOCAL ORGANIZATION OF THE ASIA AND THE PACIFIC
                  </h5>
                  <span className="text-gradient-base-color fw-700 text-uppercase ls-1px">
                    2011 Asia Pacific Conference Manila, Philippines
                  </span>
                </div>

                <div className="swiper-slide">
                  <h5 className="text-dark-gray mb-15px w-95 xl-w-100 lh-40 ls-minus-1px alt-font">
                    BEST LOCAL COMMUNITY DEVELOPMENT AWARD (PINOY ICON)
                  </h5>
                  <span className="text-gradient-base-color fw-700 text-uppercase ls-1px">
                    2011 Asia Pacific Conference Manila, Philippines
                  </span>
                </div>

                <div className="swiper-slide">
                  <h5 className="text-dark-gray mb-15px w-95 xl-w-100 lh-40 ls-minus-1px alt-font">
                    Top 3 Best Local Community Empowerment Program
                    <br /> <b>Building Hope in Kati Kati, Guimaras</b>{" "}
                  </h5>
                  <span className="text-gradient-base-color fw-700 text-uppercase ls-1px">
                    ASPAC 2016 Kaohsiung, Taiwan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
