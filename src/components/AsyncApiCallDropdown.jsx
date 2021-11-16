import React from 'react'
import AsyncSelect from 'react-select/async';

const AsyncApiCallDropdown = () => {

    const loadOptions = async (inputValue) => {
        const responce = await fetch(
            inputValue ? `https://jsonplaceholder.typicode.com/photos?id=${inputValue}` : `https://jsonplaceholder.typicode.com/photos?_start=1&_end=10`
        )
        return responce.json()
    };

    const style = { alignItems: "center", display: "flex" }
    return (
        <div className="App">
            <AsyncSelect
                // cacheOptions
                defaultOptions
                getOptionLabel={(e) => (
                    <div style={style}>
                        <img style={{ height: "20px" }} src={e.thumbnailUrl} alt="imgs"></img> &nbsp;
                        <span> {e.title}</span>
                    </div>
                )}
                getOptionValue={(e) => e.url}
                loadOptions={loadOptions}
            />
        </div>)
}

export default AsyncApiCallDropdown