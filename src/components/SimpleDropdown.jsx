import React from 'react'
import Select from 'react-select'
import vegitables from '../vagetableData'

const SimpleDropdown = () => {
    return (
      <>
      <p>Simple Dropdown</p>
      <br />
        <Select
        options={vegitables}
      />
      <hr />
      </>
    )
}

export default SimpleDropdown
