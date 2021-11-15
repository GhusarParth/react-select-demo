import React from 'react'
import AsyncSelect from 'react-select/async';
import vegitables from '../vagetableData';

const AsyncSelectDropdown = () => {
    
    const filterData =(e)=> vegitables.filter(vegitable => vegitable.label.toLowerCase().includes(e.toLowerCase()))
        const loadOptions = (e, callBack) => {
            console.log(e);
                callBack(filterData(e))        
        };
    
        return (
            <>
                <p>Async Select DropDown</p>
                <br />
                <AsyncSelect
                    loadOptions={loadOptions}
                    defaultOptions
                />
                <hr />
            </>
        );
    };
    


export default AsyncSelectDropdown
