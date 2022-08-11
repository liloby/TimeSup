import "./ExploreAll.css"
import PersonCard from "../PersonCard/PersonCard"
import RandomCard from "../RandomCard/RandomCard"

export default function ExploreAll({profileItems, currentProfile}) {
    return (
        <div className="ExploreAll">
                { profileItems.length > 1 ?
                <>
                <div className="ExploreAll-items">
                {profileItems.map((person, idx) => (
                <PersonCard person={person} key={idx} idx={idx} currentProfile={currentProfile}/>
                ))}
                </div>
                </>
                :
                <>
                <div className="Match">
                <RandomCard person={profileItems} />
                </div>
                </>
                }               
        </div>
    )
}