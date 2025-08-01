import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient } from '@tanstack/react-query';

import App from './components/App/App.tsx';
import 'modern-normalize';
import './global.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {}
    <App />
  </StrictMode>,
);

