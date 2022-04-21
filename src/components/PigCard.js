import React from "react";

// renders the pigs and this changes for what you select
function PigCard({ hog, extraHogInfo, handleHogInfo }) {
        return <div
            className="ui grid container"
            key={hog.name}>
                <h3 className="ui eight wide column">
                {hog.name} 
                {extraHogInfo ? 
                <ul key={hog.name} className="ui eight wide column">
                    <li> Weight: {hog.weight}</li>
                    <li>Specialty: {hog.specialty}</li>
                    <li>Greased: {hog.greased.toString()}</li>
                    <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
                </ul> : null}       
                </h3>
                <img onClick={handleHogInfo} src={hog.image} className="ui eight wide column" />
        </div>
}

export default PigCard