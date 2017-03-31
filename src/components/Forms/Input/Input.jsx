import React from 'react';
import Radium from 'radium';

// style
const style = {
    fontSize: '1.5em',
    padding: '1rem',
    width: '100%',
    border: '1px solid #EEE',
    ':focus': {
        outline: 'none',
        boxShadow: '0 0 1rem rgba(0, 0, 0, .25)'
    }
};

const Input = (props) => {
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

export default Radium(Input);