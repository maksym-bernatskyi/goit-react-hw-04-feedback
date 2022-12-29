import PropTypes from 'prop-types';

const Notifications = ({message}) => (
    <span>{message}</span>
)

export default Notifications;

Notifications.propTypes = {
    message: PropTypes.string.isRequired,
}