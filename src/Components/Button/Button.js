import React from 'react';

const Button = ({ children, margin, border, rounded }) => {
    return (
        <div>
            <button className={ `btn btn-primary ${margin} ` }>{ children }</button>
        </div>
    );
};

export default Button;