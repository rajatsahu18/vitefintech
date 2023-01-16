import './App.css';
import { AllRoutes } from './components/routes/AllRoutes';
import i18n from "i18next";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang)
  }, [])

  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
