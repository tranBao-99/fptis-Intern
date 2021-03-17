import React from 'react';
import PropTypes from 'prop-types';
import "./Select.css"

Select.propTypes = {
    list: PropTypes.array,
    multiple: PropTypes.bool,
    size: PropTypes.number,
};

function Select(props: any) {
    const { list, multiple, size } = props;
    const mul = 'multiple';
    return multiple ? (
        <select className="Select" multiple size={size}>
            {
                list.map((item: string) => (
                    <option>{item}</option>
                ))
            }
        </select>

    ) : (
        <select className="Select" size={size}>
            {
                list.map((item: string) => (
                    <option>{item}</option>
                ))
            }
        </select>
    )
}

export default Select;