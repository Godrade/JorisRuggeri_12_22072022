import PropTypes from 'prop-types';

export const CardItemActivity = ({iconLink, number, type, name}) => {
    return (
        <div className="card-content">
            <div className="card-icon">
                <img src={iconLink} alt="Icon"/>
            </div>
            <div className="card-info">
                <span className="card-number">{number}{type}</span>
                <span className="card-text">{name}</span>
            </div>
        </div>
    )
}

CardItemActivity.prototype = {
    iconLink: PropTypes.string,
    number: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string
}