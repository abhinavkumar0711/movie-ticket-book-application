import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'movie-ticket-booking-application-2024/dist/style.css';
import App from './App.jsx'
import store from './utils/store.js';
import { Provider} from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </StrictMode>,
)