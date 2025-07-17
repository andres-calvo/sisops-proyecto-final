import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

// Carga dinámica de los bundles js
const backend = resourcesToBackend((language: string, namespace: string) =>
  import(`../locales/${language}/${namespace}.js`).then((res) => res.default)
);

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    lng: 'es',
    fallbackLng: 'en',
    ns: ['common', 'todo'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  });

export default i18n; 