import propTypes from 'prop-types';

/**
 *
 * @param iconLink
 * @param number
 * @param type
 * @param name
 * @constructor
 */
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
    iconLink: propTypes.string,
    number: propTypes.number,
    type: propTypes.string,
    name: propTypes.string
}