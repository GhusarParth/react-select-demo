import React from 'react'
import Select, { components } from 'react-select'
import vegitables from '../vagetableData'

const MultiSelectWithCheckBox = () => {
    return (
        <div>
            <p>Multi Select DropDown With CheckBoxes</p>
            <br />
            <Select
                options={vegitables}
                isMulti
                allowSelectAll
                // value={this.state.optionSelected}
                components={{ Option }}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
            />
            <hr />
        </div>
    )
}

export default MultiSelectWithCheckBox

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};