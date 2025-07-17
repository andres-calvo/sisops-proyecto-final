import './App.css';
import { Outlet } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation('common');
  return (
    <div className="content">
      <header>
        <h1>{t('welcome')}</h1>
        <p>Dummy Update to trigger a build</p>
        <LanguageSwitcher />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
