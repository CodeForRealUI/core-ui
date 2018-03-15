import React from 'react';
import PropTypes from 'prop-types';


const RenderIf = ({ children, predicate }) => {
    if (predicate) {
        return (<div>{children}</div>);
    }
    return <div></div>;
};

export default RenderIf;
  