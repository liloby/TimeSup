import "./RandomCard.css";
import * as profileAPI from "../../utilities/profile-api";
import { useEffect, useState } from "react";

export default function PersonCard({ person, setProfileItems, handleRandom }) {
    const [hobbies, setHobbies] = useState([])

    useEffect(function () {
        async function getHobbies() {
            if (person.displayName) {
                const hobbies = await person.hobbies.replaceAll(",", "");
                const hobbiesArr = hobbies.split(" ");
                setHobbies(hobbiesArr)
            }
        }
            getHobbies()
    }, [person])

  return (
    <div>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${person.image})` }}
      >
      <div className="random-info-wrapper">
        <h3>{person.displayName}</h3>
        <div className="Hobby">
          {hobbies.map((hobby) => (
            <p>{hobby}</p>
          ))}
        </div>
        <p>Age: {person.age}</p>
        <p>Bio: {person.bio}</p>
      </div>
    </div>
    </div>
  );
}
