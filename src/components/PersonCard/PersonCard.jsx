import "./PersonCard.css"

export default function PersonCard({ person}) {

    let hobbies = person.hobbies.replaceAll(",", "")
    let hobbiesArr = hobbies.split(" ")

    return (
        <div className="PersonCard" style={{ backgroundImage: `url(${person.image})`}}>
            <div className="PersonCard-wrapper">
            <h3>{person.displayName}</h3>
            <div className="Hobby">
            {hobbiesArr.map((hobby, idx) => (
                <p>{hobby}</p>
                ))}
            </div>
            <p>Age: {person.age}</p>
            <p>Bio: {person.bio}</p>
            </div>
        </div>
    )
}