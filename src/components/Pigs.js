import React, { useState } from "react";
import PigCard from "./PigCard";
import Filter from "./Filter"
import SortPigs from "./SortPigs"
import hogs from "../porkers_data";

function Pigs() {
    // console.log("hogdata", hogs)
    // HogData for state
	const [hogData, setHogData] = useState(hogs)
    // extra info when you click image for state
    const [extraHogInfo, setExtraHogInfo] = useState(false)
    // state for the values when you sort the pigs
    const [sortValue, setSortValue] = useState("All")
    

    
    // Changing conditional for sortedHogs. changes the state for the value you select in state
    function handlePigSort(sortValue) {
        setSortValue(sortValue); 
    }
    // this is for sorting the hogs abd changing state. the name sorts alphabetically and the weight from least to most. 
    const sortedHogs = hogData.sort((hog1, hog2) => {
        if (sortValue === "name") {
            const nameA = hog1.name.toUpperCase(); 
            const nameB = hog2.name.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }
            else if (nameA > nameB) {
                return 1;
            } else {
                return 0;    
            }
        } else if (sortValue === "weight") {
            const WeightA = hog1.weight;
            const WeightB = hog2.weight; 
            if (WeightA < WeightB) {
                return -1;
            }
            else if (WeightA > WeightB) {
                return 1;
            } else {
                return 0;   
            }
        } else if (sortValue === "All") {
            return 0;
        }
    })
    // handles setting the state for extra info when clicking the image
    function handleHogInfo() {
		setExtraHogInfo((extraHogInfo) => !extraHogInfo)
	}

    // Filters hogs
    function handleGreaseFilter(filterValue) {
        console.log("filterValue", filterValue)
        
        const filteredHogs = filterValue === "All" ? hogs : hogData.filter((hog) => hog.greased === true )   
        setHogData(filteredHogs) 
    }
    // filters the hogs from all of the maps and filters and sorts and makes a card for the hog and renders the hogs 
    const hogArray = sortedHogs.map((hog) => {
        return <PigCard handleHogInfo={handleHogInfo} key={hog.name} hog={hog} extraHogInfo={extraHogInfo} />
    })    

    return (
        <div>
            <Filter handleGreaseFilter={handleGreaseFilter}/>
            <SortPigs handlePigSort={handlePigSort} />
            {hogArray}
        </div>
    )
}

export default Pigs;