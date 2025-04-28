import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App/App.tsx';
import 'modern-normalize';
import './global.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* Помилка: неправильно переданий проп до QueryClientProvider (queryClient замість client) */}
        <QueryClientProvider queryClient={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
);
