import "./SearchBar.css"
import * as profileAPI from '../../utilities/profile-api'

export default function SearchBar({handleRandom, profileItems, setProfileItems, handleFilter}) {

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
                    <select onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Man">Men</option>
                        <option value="Woman">Women</option>
                        <option value="Non-binary">Non-binary</option>
                    </select>
                </label>
            </div>
        </div>
    )
}