import Light from './Light';
import './TrafficLights.css'; // Стили (создай файл)

const TrafficLights = () => {
  return (
    <div className="traffic-container">
      {/* Горизонтальный светофор */}
      <div className="horizontal-lights">
        <h3>Горизонтальний</h3>
        <div className="lights-row">
          <Light tlColor="red" />
          <Light tlColor="yellow" />
          <Light tlColor="green" />
        </div>
      </div>

      {/* Вертикальный светофор */}
      <div className="vertical-lights">
        <h3>Вертикальний</h3>
        <div className="lights-column">
          <Light tlColor="red" />
          <Light tlColor="yellow" />
          <Light tlColor="green" />
        </div>
      </div>
    </div>
  );
};

export default TrafficLights;