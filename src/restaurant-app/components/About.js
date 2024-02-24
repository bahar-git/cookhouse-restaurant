import "../assets/About.css";
import React from "react";

export const About = () => {
  return (
    <main className="aboutContainer">
      <div className="aboutHeadWrapper">
        <h2>About Us</h2>
        <h6>Our Story</h6>
        <h2>How it all began</h2>
      </div>

      <div className="imgAndStoryWrapper">
        <section className="imgAboutWrapper">
          <div className="imagesWrapper">
            <div className="beef-pie-pic">
              <img
                alt="beef-pie"
                // src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
                src="./images/img_pie.png"
              />
            </div>

            <div className="lady-cook-pic">
              <img alt="lady-cook" src="./images/img_lady_smile_graphics.png" />
            </div>
          </div>

          <div className="quote">
            <p>
              " Every story, no matter how modest, has the power to captivate
              and inspire. It's the unique charm of each tale that makes life's
              journey so fascinating "<span>~Betty Newton</span>
            </p>
          </div>
        </section>

        <section className="storyWrapper">
          <p>
            Betty Newton, the visionary behind this beloved restaurant, started
            her culinary journey like any other home cook, whipping up meals for
            her family on special occasions. However, it was her signature "Beef
            and Mustard Pie" that truly captured the hearts of her loved ones,
            becoming a staple at holiday gatherings and family reunions.
          </p>
          <p>
            Despite the rave reviews from her discerning family members, Betty
            hesitated to share her culinary talent with the public due to
            financial constraints and self-doubt. It wasn't until she relocated
            to the vibrant city of Chicago in 2019 that fate intervened, setting
            her on a path of culinary fulfillment.
          </p>
          <p>
            One fateful day, as Betty ventured out to share her pie with a
            friend nearby, she encountered a stray cat who seemed drawn to the
            enticing aroma emanating from her bag. Unable to resist the hungry
            feline's pleas, Betty shared a portion of her meal, only to discover
            that the cat belonged to her friend's neighbor, James.
          </p>
          <p>
            Through their chance encounter, Betty and James forged a deep
            connection, with James providing unwavering encouragement and
            support for Betty's culinary aspirations. Bolstered by James's
            belief in her talent, Betty finally found the courage to pursue her
            dream.
          </p>
          <p>
            In 2021, armed with love and determination, Betty launched her
            restaurant, offering patrons a taste of her cherished family recipe.
            Today, her restaurant stands as a testament to love, resilience, and
            the transformative power of sharing a meal with others.
          </p>
        </section>

        <section className="ladyPieImagesWrapper">
          <div className="imageLadyPie">
            <img alt="" src="./images/img_lady_pie.png" />
            <p>Betty cooking pie</p>
          </div>

          <div className="imageCatLadyMan">
            <img alt="" src="./images/img_cat_lady_man.png" />
            <p>James, Whisker and Betty</p>
          </div>
        </section>
      </div>
    </main>
  );
};
