import "./RandomCard.css"

export default function PersonCard({ person }) {


    return (
        <div className="MatchCard">
            <img className="MatchCard-img" src={person.image} alt="" />
            <h3>{person.displayName}</h3>
            <p>{person.age}</p>
            <p>{person.hobbies}</p>
            <p>{person.bio}</p>
        </div>
    )
}