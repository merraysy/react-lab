import React from 'react';

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