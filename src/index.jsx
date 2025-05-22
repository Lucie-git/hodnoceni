import { createRoot } from 'react-dom/client';
import './global.css';
import { HomePage } from './pages/HomePage/HomePage';

createRoot(document.querySelector('#app')).render(<HomePage />);
