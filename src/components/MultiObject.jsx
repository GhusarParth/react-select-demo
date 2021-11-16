import React from 'react'
import AsyncSelect from 'react-select/async';

function MultiObject() {
    const loadOptions = async (inputValue) => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/users` )
        let data = await responce.json()
        let dataOne = await data.filter(address => address.address.street.toLowerCase().includes(inputValue.toLowerCase()))
        return dataOne?dataOne: data
    };

    const style = { alignItems: "center", display: "flex" }
    return (
        <div className="App">

            <p>Multi Object with an api in option</p>
            <AsyncSelect
                defaultOptions
                getOptionLabel={(e) => (
                    <div style={style}>
                        <span>{e.address.suite}</span> &nbsp;
                        <span>{e.address.street}</span>
                    </div>
                )}
                getOptionValue={(e) => e.url}
                loadOptions={loadOptions}
            />
            <hr />
        </div>)
}

export default MultiObject
