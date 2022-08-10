import "./RandomCard.css"

export default function PersonCard({ person }) {


    return (
        <div className="MatchCard">
            <img class="MatchCard-img" src={person.image} alt="" />
            <h3>{person.displayName}</h3>
            <p>Age: {person.age}</p>
            <p>{person.hobbies}</p>
            <p>Bio: {person.bio}</p>
        </div>
    )
}