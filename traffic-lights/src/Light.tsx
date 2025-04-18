import PropTypes from 'prop-types';
import { MouseEventHandler } from 'react';

interface LightProps {
  tlColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Light = ({ tlColor = 'red', onClick }: LightProps) => {
  return (
    <div 
      style={{ 
        backgroundColor: tlColor,
        width: 50,
        height: 50,
        borderRadius: '50%',
        margin: 5,
        cursor: 'pointer',
        transition: 'transform 0.1s'
      }}
      onClick={onClick}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    />
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Light;