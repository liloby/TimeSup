import "./RandomCard.css";
import * as profileAPI from "../../utilities/profile-api";

export default function PersonCard({ person, setProfileItems, handleRandom }) {
  return (
    <div>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${person.image})` }}
      >
      <div className="random-info-wrapper">
        <h3>{person.displayName}</h3>
        <p>Hobbies: {person.hobbies}</p>
        <p>Age: {person.age}</p>
        <p>Bio: {person.bio}</p>
      </div>
    </div>
    </div>
  );
}
