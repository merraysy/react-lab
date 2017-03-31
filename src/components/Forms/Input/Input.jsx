import React from 'react';

// styles
import './Input.sass';

export default (props) => {
    const { name, placeholder, refHandler } = props;
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            ref={refHandler}
        />
    );
};