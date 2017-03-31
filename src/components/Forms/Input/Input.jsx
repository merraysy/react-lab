import React from 'react';

// style
const style = {
    fontSize: '1.5em',
    padding: '1rem',
    width: '100%',
    border: '1px solid #EEE'
};

export default (props) => {
    const { name, placeholder, refHandler } = props;
    return (
        <input
            style={style}
            type="text"
            name={name}
            placeholder={placeholder}
            ref={refHandler}
        />
    );
};