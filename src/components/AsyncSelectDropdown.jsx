import React from 'react'
import AsyncSelect from 'react-select/async';
import vegitables from '../vagetableData';

const AsyncSelectDropdown = () => {
    
    const loadOptions = (e, callBack) => {
            callBack(()=>vegitables.filter(vegitable => vegitable.label.toLowerCase().includes(e?.toLowerCase())))        
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
