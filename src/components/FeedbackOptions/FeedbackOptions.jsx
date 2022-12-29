import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, leaveFeedback }) => {
    return (
        <ul className="feedback__controls">
            {options.map((option, index) => (
                <li className="controls__item" key={index}>
                    <button name={option} type="button" onClick={leaveFeedback}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    leaveFeedback: PropTypes.func.isRequired,
};