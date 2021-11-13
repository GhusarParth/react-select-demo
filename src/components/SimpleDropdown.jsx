import React from 'react'
import Select from 'react-select'
import vegitables from '../vagetableData'

const SimpleDropdown = () => {
    return (
        <Select
        options={vegitables}
      />
    )
}

export default SimpleDropdown
