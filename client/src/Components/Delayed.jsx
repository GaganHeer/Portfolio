import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const Delayed = (props) => {
    const [state, setState] = useState({hidden: true});

    useEffect(() => {
        setTimeout(() => {
            setState({hidden: false});
        }, props.delay);
    }, [props.delay])

    return state.hidden ? '' : props.children;
}

Delayed.propTypes = {
  delay: PropTypes.number.isRequired
};

export default Delayed;