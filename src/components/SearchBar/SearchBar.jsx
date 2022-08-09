import "./SearchBar.css"

export default function SearchBar() {
    return (
        <div className="SearchBar" >
            <div className="SearchBar-items">
                <label>
                <input type="radio" />
                    Explore
                </label>
                <label>
                <input type="radio" />
                    Match
                </label>
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