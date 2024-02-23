import "../assets/Contacts.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Contacts = () => {
  const initialWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const openHour = "8:00 am";
  const closeHour = "10:00 pm";

  const [weekdays] = useState(initialWeekday);
  const stateData = useSelector((state) => state.footerData);

  const contacts = stateData?.footerData?.contacts || [];
  const media = stateData?.footerData?.media || [];

  return (
    <main className="contactsContainer">
      <h2>Contacts</h2>

      <div className="inContactsWrapper">
        <section className="hoursWrapper">
          <h5>Hours of operation</h5>
          <ul>
            {weekdays.map((item, index) => {
              return (
                <li key={index}>
                  {item}: {openHour} - {closeHour}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="locationWrapper">
          <h5>Where to find us</h5>
          <ul>
            {contacts.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>

          <div className="mediaWrapper">
            {media.map((item, index) => {
              return (
                <a href="#" key={index}>
                  {item}
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};
