import React, { useState } from "react";

function SortPigs({ handlePigSort }) {
    const [sortValue, setSortValue] = useState("All")

    // callback function for the onchange. takes in the handlePigSort and sends back the sortValue you select
    function handleChange(e) {
        setSortValue(e.target.value)
        handlePigSort(e.target.value)
    }

    return (
        <div className="SortButton">
            Sort-By:
            <select value={sortValue} onChange={handleChange}>
                <option value="All">All</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )

}

export default SortPigs;