export default function SearchBar() {
    return (
        <div>
            <div>
                <label>
                <input type="radio" />
                    Explore
                </label>
                <label>
                <input type="radio" />
                    Match
                </label>
                <label>
                    Sortby:
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