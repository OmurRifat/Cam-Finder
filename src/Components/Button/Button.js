import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, margin, border, width, position, rounded, to }) => {
    return (
        <button className={ `btn btn-primary ${margin}` }><Link to={ to }>{ children }</Link></button>
    );
};

export default Button;