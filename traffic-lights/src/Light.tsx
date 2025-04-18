import PropTypes from 'prop-types';

interface LightProps {
  tlColor?: string;  // Опциональный параметр
}

const Light = ({ tlColor = 'red' }: LightProps) => {
  return (
    <div 
      style={{ 
        backgroundColor: tlColor,
        width: 50,
        height: 50,
        borderRadius: '50%',
        margin: 5
      }} 
    />
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
};

export default Light;