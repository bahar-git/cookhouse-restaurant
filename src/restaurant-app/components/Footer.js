import "../assets/Footer.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFooterData } from "../../actionsStoreReducer/sliceRestaurant";
import { IoIosMail } from "react-icons/io";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";

export const Footer = () => {
  const initialFooterData = {
    contacts: [
      "12345 Kitchen Ave, Chicago, IL 60604",
      "cookhouse@gmail.com",
      "(773) 000-0000",
    ],
    media: [
      <RiInstagramFill />,
      <FaFacebook />,
      <TbBrandYoutubeFilled />,
      <BsTwitter />,
    ],
    copyright: "Copyright © 2024 Cook House Restaurant - All rights reserved",
  };

  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.footerData);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contacts = stateData?.footerData?.contacts || [];
  const media = stateData?.footerData?.media || [];
  const copyright = stateData?.footerData?.copyright;

  const allFooterData = () => {
    dispatch(getFooterData(initialFooterData));
  };

  useEffect(() => {
    allFooterData();
  }, []);

  // ------- func hovering on contacts -----------

  const handleMouseOverIconEl = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeaveIconEl = () => {
    setHoveredIndex(null);
  };

  return (
    <footer>
      <section className="contactsWrapper">
        {contacts.length > 0 &&
          contacts.map((item, index) => {
            return (
              <p
                key={index}
                className="contacts"
                onMouseOver={() => handleMouseOverIconEl(index)}
                onMouseLeave={handleMouseLeaveIconEl}
              >
                {index === 0 ? (
                  hoveredIndex === 0 ? (
                    <FaMapLocationDot />
                  ) : (
                    <FaLocationDot />
                  )
                ) : index === 1 ? (
                  hoveredIndex === 1 ? (
                    <IoIosMailOpen />
                  ) : (
                    <IoIosMail />
                  )
                ) : hoveredIndex === 2 ? (
                  <FaPhoneVolume />
                ) : (
                  <FaPhone />
                )}
                <span>{item}</span>
              </p>
            );
          })}
      </section>

      <section className="socialMediaWrapper">
        {media.length > 0 &&
          media.map((item, index) => {
            return (
              <a href="#" key={index} className="iconSocialMedia">
                {item}
              </a>
            );
          })}
      </section>

      <p className="copyright">{copyright}</p>
    </footer>
  );
};
