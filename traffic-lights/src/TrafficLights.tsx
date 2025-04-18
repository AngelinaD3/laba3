import { useState } from 'react';
import Light from './Light';
import './TrafficLights.css';

const TrafficLights = () => {
  // Состояния для счетчиков горизонтального светофора
  const [horizontalCounts, setHorizontalCounts] = useState({
    red: 0,
    yellow: 0,
    green: 0
  });

  // Состояния для счетчиков вертикального светофора
  const [verticalCounts, setVerticalCounts] = useState({
    red: 0,
    yellow: 0,
    green: 0
  });

  return (
    <div className="traffic-container">
      {/* Горизонтальный светофор */}
      <div className="horizontal-lights">
        <h3>Горизонтальний (Кліки: 🔴{horizontalCounts.red} 🟡{horizontalCounts.yellow} 🟢{horizontalCounts.green})</h3>
        <div className="lights-row">
          <Light 
            tlColor="red" 
            onClick={() => setHorizontalCounts({...horizontalCounts, red: horizontalCounts.red + 1})} 
          />
          <Light 
            tlColor="yellow" 
            onClick={() => setHorizontalCounts({...horizontalCounts, yellow: horizontalCounts.yellow + 1})} 
          />
          <Light 
            tlColor="green" 
            onClick={() => setHorizontalCounts({...horizontalCounts, green: horizontalCounts.green + 1})} 
          />
        </div>
      </div>

      {/* Вертикальный светофор */}
      <div className="vertical-lights">
        <h3>Вертикальний (Кліки: 🔴{verticalCounts.red} 🟡{verticalCounts.yellow} 🟢{verticalCounts.green})</h3>
        <div className="lights-column">
          <Light 
            tlColor="red" 
            onClick={() => setVerticalCounts({...verticalCounts, red: verticalCounts.red + 1})} 
          />
          <Light 
            tlColor="yellow" 
            onClick={() => setVerticalCounts({...verticalCounts, yellow: verticalCounts.yellow + 1})} 
          />
          <Light 
            tlColor="green" 
            onClick={() => setVerticalCounts({...verticalCounts, green: verticalCounts.green + 1})} 
          />
        </div>
      </div>

      {/* Кнопки сброса */}
      <div className="reset-buttons">
        <button 
          onClick={() => setHorizontalCounts({red: 0, yellow: 0, green: 0})}
        >
          Скинути горизонтальні
        </button>
        <button 
          onClick={() => setVerticalCounts({red: 0, yellow: 0, green: 0})}
        >
          Скинути вертикальні
        </button>
      </div>
    </div>
  );
};

export default TrafficLights;