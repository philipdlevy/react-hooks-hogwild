import React, { useState } from "react";

function Filter({ handleGreaseFilter }) {
    const [filterValue, setFilterValue] = useState("All")

    // This is the callback function for the onchange. receieves info from handleGreaseFilter and changes the state to the current filterValue you select
    const handleChange = (e) => {
        setFilterValue(e.target.value)
        handleGreaseFilter(e.target.value)
    }

    return (
        <div className="Filter">
            Category: 
            <select value={filterValue} onChange={handleChange}>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
            </select>
        </div>
    )
}

export default Filter;