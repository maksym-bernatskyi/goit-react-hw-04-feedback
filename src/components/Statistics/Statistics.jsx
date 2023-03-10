import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className="statistics__list">
        <li className="statistics__item">
            <span>Good: {good}</span>
        </li>

        <li className="statistics__item">
            <span>Neutral: {neutral}</span>
        </li>

        <li className="statistics__item">
            <span>Bad: {bad}</span>
        </li>

        <li className="statistics__item">
            <span>Total: {total}</span>
        </li>

        <li className="statistics__item">
            <span>Positive feedbacks: {good ? positivePercentage() : 0}%</span>
        </li>
    </ul>
)

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}