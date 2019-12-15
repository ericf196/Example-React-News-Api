
import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({ titulo }) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a className="brand-logo center">{titulo}</a>
        </nav>
    )
}

Header.PropTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header
