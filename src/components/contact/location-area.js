import React from "react";
import Image from "next/image";
// internal
import location_icon_1 from "@assets/img/contact/contact-location-1.png";
import location_icon_2 from "@assets/img/contact/contact-location-2.png";
import location_icon_3 from "@assets/img/contact/contact-location-3.png";

// single location item
function SingleLocationItem({ title, icon, location, tel }) {
  return (
    <div className="contact__location-item">
      <div className="row align-items-center">
        <div className="col-lg-9 col-md-8 col-sm-7">
          <div className="contact__location-content d-lg-flex align-items-center">
            <h3 className="contact__location-title">{title}</h3>
            <div className="contact__location-info d-sm-flex flex-wrap align-items-center">
              <div className="contact__location-icon mr-45">
                <Image src={icon} alt="icon image" />
              </div>
              <div className="contact__location-content">
                <p>
                  <a href="mailto:tiemcaivongne@gmail.com">{location}</a>
                </p>
                <p>
                  <a href="tel:686-324-6838">{tel}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-5">
          <div className="contact__location-btn text-sm-end">
            <a
              rel="noreferrer"
              href="https://www.google.com/maps/place/1+%C4%90%E1%BA%A1i+C%E1%BB%93+Vi%E1%BB%87t,+B%C3%A1ch+Khoa,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0074279,105.8399398,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab8a922653a9:0x6c2ec19683313eab!8m2!3d21.0074229!4d105.8425147!16s%2Fg%2F11gfjt79ty?entry=ttu"
              target="_blank"
              className="tp-btn-border"
            >
              view location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const LocationArea = () => {
  return (
    <section className="contact__location-area pb-130 pt-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-7 offset-xl-1 col-md-8">
            <div className="tp-section-wrapper-2 mb-35">
              <span className="tp-section-subtitle-2 subtitle-mb-9">
                LOCATIONS
              </span>
              <h3 className="tp-section-title-2 font-40">
                Come and visit our offices around the world
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 ">
            <div className="contact__location-wrapper">
              <SingleLocationItem
                title="Australia Office"
                icon={location_icon_1}
                location="tiemcaivongne@gmail.com"
                tel="686-324-6838"
              />
              <SingleLocationItem
                title="San Francisco Office"
                icon={location_icon_2}
                location="tiemcaivongne@gmail.com"
                tel="686-324-6810"
              />
              <SingleLocationItem
                title="Egpyt Office"
                icon={location_icon_3}
                location="contact.location@website.com"
                tel="786-324-6810"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationArea;
