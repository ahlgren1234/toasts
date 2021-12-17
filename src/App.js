import { useContext, useState } from 'react';
import Toast from './components/Toast';
import { ToastContext } from './context/toastContext';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [position, setposition] = useState('top-left');

  const { state, dispatch } = useContext(ToastContext);

  const handleButtonSelect = (type) => {
    switch (type) {
      case 'SUCCESS':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'Success',
            message: 'Successfully completed',
          },
        });
      case 'INFO':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'Info',
            message: 'Some Information',
          },
        });
      case 'WARNING':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'Warning',
            message: 'This warning',
          },
        });
      case 'DANGER':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'Danger',
            message: 'You are in danger',
          },
        });
      default:
        return;
    }
  };

  return (
    <div>
      <div className="main-content">
        <button
          className="button button-success"
          onClick={() => handleButtonSelect('SUCCESS')}
        >
          SUCCESS
        </button>
        <button
          className="button button-info"
          onClick={() => handleButtonSelect('INFO')}
        >
          INFO
        </button>
        <button
          className="button button-warning"
          onClick={() => handleButtonSelect('WARNING')}
        >
          WARNING
        </button>
        <button
          className="button button-danger"
          onClick={() => handleButtonSelect('DANGER')}
        >
          DANGER
        </button>
        <select
          value={position}
          onChange={(e) => setposition(e.target.value)}
          name=""
          id=""
          className="position-select"
        >
          <option value="top-left">Top-Left</option>
          <option value="top-right">Top-Right</option>
          <option value="bottom-left">Bottom-Left</option>
          <option value="bottom-right">Bottom-Right</option>
        </select>
        <br />
        <p className="footer-text">
          React Toasts/Notifications system made by Peter Ahlgren. <br />
          <a href="https://peterahlgren.com">Website</a>, <br />
          <a href="https://github.com/ahlgren1234/toasts">Code</a>.
        </p>
      </div>
      <Toast position={position} autoDeleteInterval={4000} />
    </div>
  );
}

export default App;
