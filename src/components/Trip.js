import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="With 17,000 Indonesian islands scattered between the Asian mainland and Australia, the archipelago has more than its share of natural wonders and curious wildlife. You’ll discover everything from the scorched landscape of Komodo to the lush volcanic slopes of Flores and the shimmering reefs of the Gili Islands. Spectacular crater lakes change colour before your eyes, while sparring dragons could be straight from a scene of Jurassic Park."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a country of contrasts-an eclectic mix of colonial architecture, stunning parks and beaches, contemporary skyscrapers, and a unique landscape covered in tea plantations. A melting pot with influences from neighboring lands, as well as Western countries, Malaysia has something for everybody-from the world-famous Petrona Towers to the cultural and religious diversity that makes this a destination like no other."
        />

        <TripData
          image={Trip3}
          heading="Trip in India"
          text="India is a country full of dramatic landscapes, scenic vistas, tasty food, and adventurous activities. From North to South, there are many places that will give you soul-stirring experiences without burning a hole in your pocket. Here is a list of places one can explore to enjoy budget trips in India."
        />
      </div>
    </div>
  );
}

export default Trip;
