import PropTypes from 'prop-types'
import { InputBase } from './styles'

const Input = ({ onChange, placeholder, ...props }) => {
  return (
    <>
      <InputBase onChange={onChange} placeholder={placeholder} {...props}/>
    </>
  );
}

Input.defaultProps = {
  value: ''
};

Input.prototype = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input;
