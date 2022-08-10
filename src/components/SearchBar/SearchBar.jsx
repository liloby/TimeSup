import "./SearchBar.css"

export default function SearchBar({handleRandom, getProfile, profileItems}) {
    return (
        <div className="SearchBar" >
            <div className="SearchBar-items">
                <button class={profileItems.length > 1 ? "red" : ""} onClick={getProfile}> Explore</button>
                <button class={profileItems.length > 1 ? "" : "red"} onClick={handleRandom}> Match</button>
                <label>
                    Filter:
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