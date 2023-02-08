import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './navigation-link.module.css';

function NavigationLink({ Icon, text, pathName }) {
  const pathLocation = useLocation();
  const navigate = useNavigate();

  console.log(pathLocation);

  return (
    <div className={styles.link} onClick={() => navigate(`${pathName}`)}>
      <Icon type={pathName === pathLocation.pathname ? 'primary' : 'secondary'} />

      <p className={`text text_type_main-default ${pathName === pathLocation.pathname ? '' : 'text_color_inactive'}`}>
        {text}
      </p>
    </div>
  );
}

export default NavigationLink;

NavigationLink.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired
};
