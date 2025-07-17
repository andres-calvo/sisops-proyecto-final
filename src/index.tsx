import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';
import ToDo from './modules/ToDo';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />, 
      children: [
        { index:true, element: <ToDo /> },
      ],
    },
  ]);
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </React.StrictMode>,
  );
}
