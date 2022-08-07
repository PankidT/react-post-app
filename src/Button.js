import React from 'react';
import PropTypes from 'prop-types'

function Button({name}) {
    return <button>{name}</button>
}
Button.prototype = {
    name: PropTypes.string.isRequired
};

export default Button;