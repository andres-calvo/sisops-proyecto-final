import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n,t } = useTranslation('common');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div style={{ marginTop: 8 }}>
      <p style={{color:"#00000"}}>{t('language-switcher')}</p>
      <button onClick={() => changeLanguage('es')} className='language-button'>Español</button>
      <button onClick={() => changeLanguage('en')} className='language-button'>English</button>
    </div>
  );
};

export default LanguageSwitcher; 