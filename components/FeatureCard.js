// components/FeatureCard.js
import PropTypes from 'prop-types';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">

    <h4 className="feature-card-title">{title}</h4>

    <p className="feature-card-description">{description}</p>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
