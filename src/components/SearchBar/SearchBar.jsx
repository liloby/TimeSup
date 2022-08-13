import "./SearchBar.css"
import * as profileAPI from '../../utilities/profile-api'

export default function SearchBar({handleRandom, profileItems, setProfileItems}) {

    async function getAllItems() {
        const profile = await profileAPI.getAll()
          setProfileItems(profile)
    }

    return (
        <div className="SearchBar" >
            <div className="SearchBar-items">
                <button className={profileItems.length > 1 ? "red btn" : "btn"} onClick={getAllItems}> Explore</button>
                <button className={profileItems.length > 1 ? "btn" : "red btn"} onClick={handleRandom}> Match</button>
                <label className="filter">
                    <span>Filter:</span>
                    <select>
                        <option value="All">All</option>
                        <option value="Age">Age</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
            </div>
        </div>
    )
}