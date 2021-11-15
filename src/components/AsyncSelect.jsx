import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const AsyncSelect = () => {
    const loadOptions = async (e) => {
        const response = await fetch(
            `https://www.anapioficeandfire.com/api/houses?region=The Westerlands&page=1&pageSize=10`
        );
        const responseJSON = await response.json();

        let updatedData = responseJSON.filter(house => house.name.toLowerCase().includes(e.toLowerCase()))

        return {
            options: updatedData.length > 0 ? updatedData : responseJSON,
            hasMore: e ? false : responseJSON.length >= 1,
        };
    };

    return (
        <>
            <p>Async Drop down</p>
            <br />
            <AsyncPaginate
                loadOptions={loadOptions}
                getOptionValue={(option) => option.name}
                getOptionLabel={(option) => option.name}
                isSearchable={true}
                placeholder="Select House"
                additional={{
                    page: 1,
                }}
            />
            <hr />
        </>
    );
};

export default AsyncSelect;