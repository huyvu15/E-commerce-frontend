import React from "react";

const TextArea = () => {
  return (
    <section className="about__text pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                It started with a <br /> bang now we are here.
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="about__text wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <p>
              <b>Welcome to Vòng Vo – the place where you’ll find unique, stylish bracelets, exclusively designed for the modern youth!</b>
              </p>

              <p>
              We are a group of five dynamic students from the Mathematics program at Hanoi University of Science and Technology. With a passion for technology and a desire to bring impressive fashion products, we have combined our expertise and creativity to create <b>Vòng Vo</b> – a bracelet brand that represents individuality and distinctive style.
              </p>

              <p>
              Vòng Vo is not just a place offering beautiful bracelets; it also conveys a message of confidence and personal style. From minimalist designs to groundbreaking products, we believe that each bracelet can tell your unique story.
              </p>
              <p>
              Join us and explore our collection of new, unique bracelets that are perfectly in line with youthful fashion trends. <b>Vòng Vo – Shine with your style!</b> 

              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
