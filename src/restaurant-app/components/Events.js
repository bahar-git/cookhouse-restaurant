import "../assets/Events.css";
import React, { useState } from "react";

export const Events = () => {
  const initialEventTypes = [
    { typeName: "EVENTS", image: "/images/img_events_food.png" },
    { typeName: "WEDDINGS", image: "/images/img_weddings_food.png" },
    { typeName: "SOCIAL", image: "/images/img_social_food.png" },
    { typeName: "DROP OFF", image: "/images/img_dropoff_food.png" },
  ];
  const [eventTypes] = useState(initialEventTypes);

  return (
    <main className="eventsContainer">
      <h2>We do food catering on events </h2>
      <p>
        If you require food catering for your events, we would be delighted to
        accommodate and serve you. Regardless of the event's scale, we strive to
        make each moment memorable and every menu distinctive, tailored
        precisely to your needs. Our culinary expertise, paired with innovative
        catering and flawless service, ensures that Chicago's finest chef-driven
        cuisine is delivered to every table where you gather. At our core, we
        believe that sharing a meal is more than just nourishment; it's an
        opportunity to create lasting memories, foster connections, and
        celebrate life's precious moments together. Let us be a part of your
        special occasions, where every bite tells a story and every dish is
        crafted with love.
      </p>

      <h5>What type of culinary experience are you interested in?</h5>

      <div className="eventTypesWrapper">
        {eventTypes.map((item, index) => {
          const { typeName, image } = item;
          return (
            <div key={index} className="eventsWrapper">
              <h6>{typeName}</h6>

              <div className="imgEventWrapper">
                <img alt="event-pic" src={image} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
