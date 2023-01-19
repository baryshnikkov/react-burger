import PropTypes from 'prop-types';

import styles from './navigation-link.module.css';

function NavigationLink({ Icon, text, isActive }) {

  return (
    <div className={styles.link}>
      <Icon type={isActive ? 'primary' : 'secondary'} />

      <p className={`text text_type_main-default ${isActive ? '' : 'text_color_inactive'}`}>
        {text}
      </p>
    </div>
  );
}

export default NavigationLink;

NavigationLink.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};
