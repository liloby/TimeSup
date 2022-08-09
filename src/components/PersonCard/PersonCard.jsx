export default function PeopleCard({ person}) {

    const hobbies = person.hobbies.replaceAll(",", " ")

    return (
        <div>
            <img width="250px" height="200px" src={person.image} alt="" />
            <h3>{person.displayName}</h3>
            <p>Age: {person.age}</p>
            <p>Hobbies: {hobbies}</p>
            <p>Bio: {person.bio}</p>
        </div>
    )
}