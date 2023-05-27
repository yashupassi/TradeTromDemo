import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';
import Colors from '../../color/Colors';

const WSpinner = ({ size, color }: any) => {
    return (
        <ActivityIndicator
            size={size}
            color={color}
        />
    )
}

WSpinner.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
}

WSpinner.defaultProps = {
    size: 'small',
    color: Colors.white
}

export default WSpinner;
