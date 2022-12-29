import PropTypes from 'prop-types';

const TitleSection = ({ title, children }) => (
    <>
        <h2>{title}</h2>
        {children}
    </>
)

export default TitleSection;

TitleSection.propTypes = {
    title: PropTypes.string.isRequired,
}