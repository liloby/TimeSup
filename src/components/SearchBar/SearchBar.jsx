import "./SearchBar.css"

export default function SearchBar({handleRandom, getProfile, profileItems}) {
    return (
        <div className="SearchBar" >
            <div className="SearchBar-items">
                <button className={profileItems.length > 1 ? "red btn" : "btn"} onClick={getProfile}> Explore</button>
                <button className={profileItems.length > 1 ? "btn" : "red btn"} onClick={handleRandom}> Match</button>
                <label className="filter">
                    <span>Sortby:</span>
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