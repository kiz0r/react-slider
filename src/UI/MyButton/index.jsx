import PropTypes from 'prop-types';
import { myBtn } from './MyButton.module.sass';

const MyButton = ({ children, ...props }) => {
  return (
    <button className={myBtn} {...props}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyButton;
