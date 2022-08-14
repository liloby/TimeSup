import "./RandomCard.css"
import * as profileAPI from "../../utilities/profile-api";

export default function PersonCard({ person, setProfileItems, handleRandom }) {


    return (
        <div>
            <div className="background-img" style={{backgroundImage: `url(${person.image})`}}>

            </div>
            <h3>{person.displayName}</h3>
            <p>{person.age}</p>
            <p>{person.hobbies}</p>
            <p>{person.bio}</p>
        </div>
    )
}