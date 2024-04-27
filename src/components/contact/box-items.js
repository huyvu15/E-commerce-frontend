import React from "react";
import Image from "next/image";
// internal
import SocialLinks from "@components/social";
import icon_1 from "@assets/img/contact/icon/contact-icon-1.png";
import icon_2 from "@assets/img/contact/icon/contact-icon-3.png";
import icon_3 from "@assets/img/contact/icon/contact-icon-2.png";

// single item
function SingleItem({ icon, title, content }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="contact__item text-center mb-30 transition-3 white-bg">
        <div className="contact__icon">
          <Image src={icon} alt="icon" />
        </div>
        <div className="contact__content">
          <span className="contact-item-subtitle">{title}</span>
          {content}
        </div>
      </div>
    </div>
  );
}

const BoxItems = () => {
  return (
    <div
      className={`contact__item-area contact__translate-2`}
    >
      <div className="container">
        <div className="row">
          <SingleItem
            icon={icon_1}
            title="Contact"
            content={
              <>
                <p>
                  <a href="mailto:hustvuvanhuy@gmail.com">hustvuvanhuy@gmail.com</a>
                </p>
                <p>
                  <a href="tel:(+84) 827 590 544">+(602) (+84) 827 590 544</a>
                </p>
              </>
            }
          />
          <SingleItem
            icon={icon_2}
            title="Location"
            content={
              <>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/1+%C4%90%E1%BA%A1i+C%E1%BB%93+Vi%E1%BB%87t,+B%C3%A1ch+Khoa,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0074279,105.8399398,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab8a922653a9:0x6c2ec19683313eab!8m2!3d21.0074229!4d105.8425147!16s%2Fg%2F11gfjt79ty?entry=ttu"
                    target="_blank"
                  >
                    1 Dai Co Viet, Hai Ba Trung, HaNoi, VietNam
                  </a>
                </p>
              </>
            }
          />
          <SingleItem
            icon={icon_3}
            title="Social Media"
            content={
              <>
                {" "}
                <p>Follow on social media</p>
                <div className="contact__social">
                  <SocialLinks />
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BoxItems;
