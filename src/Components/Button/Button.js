import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, margin, border, rounded, to }) => {
    return (
        <div>
            <button className={ `btn btn-primary ${margin} ` }><Link to={ to }>{ children }</Link></button>
        </div>
    );
};

export default Button;