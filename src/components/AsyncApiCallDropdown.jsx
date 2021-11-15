import React from 'react'
import AsyncSelect from 'react-select/async';

const AsyncApiCallDropdown = () => {

    const loadOptions = (inputValue) => {
        return fetch(
            inputValue ? `https://jsonplaceholder.typicode.com/photos?id=${inputValue}` : `https://jsonplaceholder.typicode.com/photos?_start=1&_end=10`
        ).then((res) => res.json());
    };

    const style = { alignItems: "center", display: "flex" }
    return (
        <div className="App">
            <AsyncSelect
                cacheOptions
                defaultOptions
                getOptionLabel={(e) => (
                    <div style={style}>
                        <img style={{ height: "20px" }} src={e.thumbnailUrl} alt="imgs"></img> &nbsp;
                        <span> {e.url}</span>
                    </div>
                )}
                getOptionValue={(e) => e.url}
                loadOptions={loadOptions}
            />
        </div>)
}

export default AsyncApiCallDropdown