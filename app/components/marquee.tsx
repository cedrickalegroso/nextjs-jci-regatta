const Marquee: React.FC = () => {
  return (
    <section className="overflow-hidden position-relative pt-0 lg-pb-0">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col swiper swiper-width-auto feather-shadow text-center"
            data-slider-options='{ "slidesPerView": "auto", "spaceBetween":40, "speed": 9000, "loop": true, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false, "reverseDirection": true }, "effect": "slide" }'
          >
            <div className="swiper-wrapper pb-30px marquee-slide">
              <div className="swiper-slide">
                <div className="fs-130 md-fs-90 sm-fs-70 alt-font text-dark-gray fw-600 ls-minus-6px sm-ls-minus-2px word-break-normal">
                  {" "}
                  Opportunity to Impact
                  <span className="ms-20px">-</span>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="fs-130 md-fs-90 sm-fs-70 alt-font text-dark-gray fw-600 ls-minus-6px sm-ls-minus-2px word-break-normal">
                  Flagship Programs <span className="ms-20px">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
