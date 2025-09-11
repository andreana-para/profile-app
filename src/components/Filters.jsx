const Filters = ({titles, onChange, searchName, clear, title, search}) => {
    return (
        <div className = "filter-container">
            <div className = "select-filter">
                <label htmlFor = "select">Select a title:</label>
                <select id = "select" value = {title} onChange = {onChange}>
                    <option value = "">ALL</option> {
                        titles.map(title => <option key = {title} value = {title} > {title} </option>)
                    }
                </select>
            </div>
            <div className="search-box-container">
            <label htmlFor="search">Search by name:</label>
            <input id="search" value = {search} type="text" placeholder="Enter name" onChange = {searchName}/>
            <br></br><br></br>
        </div>
                <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Filters;