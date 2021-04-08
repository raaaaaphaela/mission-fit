import React from 'react'
import PropTypes from 'prop-types'


const YoutubeEmbed = ({ embedId }) => {

    return (
        <iframe
            width="300vw"
            height="180vh"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allowFullScreen
            title="Embedded youtube"
        />
    )
};

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
}

export default YoutubeEmbed