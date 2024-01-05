import P from 'prop-types';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button disabled={disabled} style={{ fontSize: '60px', marginLeft: '10px' }} onClick={onButtonClick}>{children}</button>
  )
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool
};
