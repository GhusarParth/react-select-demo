import React from 'react'
import Select from 'react-select'
import vegitables from "../vagetableData"

function MultiDropdown() {
    return (
        <>
            <p>Multi Select Drop Down</p>    
            <br />        
            <Select
            className="basic-multi-select"
            name="vegitables"
            options={vegitables}
            isMulti
            />
            <br />
            <hr />
        </>
    )
}

export default MultiDropdown
