// import img from 'next/img';

const Logos: React.FC = () => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col client-box text-center md-mb-35px">
              <a href="#">
                <img
                  src="images/logos/JCILocalLogoPhilippines.png"
                  className="h-100px"
                  alt=""
                />
              </a>
            </div>

            <div className="col client-box text-center md-mb-35px">
              <a href="#">
                <img
                  src="images/logos/JCIRegattaLogo.PNG"
                  className="h-100px"
                  alt=""
                />
              </a>
            </div>

            <div className="col client-box text-center md-mb-35px">
              <a href="#">
                <img
                  src="images/logos/LeadToServeColored.png"
                  className="h-100px"
                  alt=""
                />
              </a>
            </div>

            <div className="col client-box text-center sm-mb-35px">
              <a href="#">
                <img
                  src="images/logos/SambisigLandscapeLogoColored.png"
                  className="h-100px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;
