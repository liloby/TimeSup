import "./ExploreAll.css"
import PersonCard from "../PersonCard/PersonCard"

export default function ExploreAll({profileItems}) {
    return (
        <div className="ExploreAll">
            <h1>Explore</h1>
            <div className="ExploreAll-items">
                { profileItems.map((person, idx) => (
                <PersonCard person={person} key={idx} idx={idx} />
                ))
                }               
            </div>
        </div>
    )
}