import { NavLink, Navigate } from "react-router-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Card from './components/Card';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { Suspense } from "react";

const lngs = {
  fr: { nativeName: 'Français' },
  en: { nativeName: 'English' }
};

const mobilelngs = {
  fr: { nativeName: 'FR' },
  en: { nativeName: 'EN' }
};

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="bg" className="h-screen w-screen lg:flex items-center justify-center">
      {/* nav on mobile */}
      <div className="lg:hidden h-screen py-2 overflow-hidden">
        <Router>
          <section className="flex justify-between">
          <div className="">
        <div className="mMenu">
            <NavLink to="home">
            {t('card.home')}
            </NavLink>
          </div>
          <div className="mMenu">
            <NavLink to="about">
            {t('card.about')}
            </NavLink>
          </div>        
          <div className="mMenu">
            <NavLink to="projects">
            {t('card.projects')}
            </NavLink>
          </div>          
          <div className="mMenu pb-3">
            <NavLink to="contact">
            {t('card.contact')}
            </NavLink>
          </div>
          </div>
          <div className="flex flex-col mr-5 justify-evenly">
            {Object.keys(mobilelngs).map((lng) => (
            <button key={lng} 
            className={"cardAnimation hover:animate-pulse"} 
            style={{ color: i18n.resolvedLanguage === lng ? "white" : "black", border: i18n.resolvedLanguage === lng ? "white solid 2px" : "", width: "60px", padding: '4px 8px 4px 8px', borderRadius: '10px', backgroundColor: i18n.resolvedLanguage === lng ? '#818cf8' : 'white', fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {mobilelngs[lng as keyof typeof mobilelngs].nativeName}
            </button>))}
            </div>
            </section>
          <div className="h-full w-full">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        </div>
        </Router>
        <div>
        </div>
      </div>
      {/*  nav on desktop */}
    <div className="hidden lg:flex lg:items-center lg:justify-center w-4/5 h-4/6 gap-20 ">
      <Router>
        <div className="h-full w-1/5 flex flex-col">
        <div className="h-full w-full flex flex-col gap-8 justify-evenly">
        <Card 
        cardDestination='home'
        cardName={t('card.home')}
        />
        <Card 
        cardDestination='about'
        cardName={t('card.about')}
        />
        <Card 
        cardDestination='projects'
        cardName={t('card.projects')}
        />
        <Card 
        cardDestination='contact'
        cardName={t('card.contact')}
        />
          <div className="flex justify-between">
          {Object.keys(lngs).map((lng) => (
            <button key={lng} 
            className={"cardAnimation hover:animate-pulse"} 
            style={{ color: i18n.resolvedLanguage === lng ? "white" : "black", border: i18n.resolvedLanguage === lng ? "white solid 2px" : "", width: "90px", padding: '4px 8px 4px 8px', borderRadius: '10px', backgroundColor: i18n.resolvedLanguage === lng ? '#818cf8' : 'white', fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng as keyof typeof lngs].nativeName}
            </button>
          ))}
        </div>
      </div>
        </div>
        <div className="h-full w-full box">
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </div>
      </Router>
    </div>
    </section>
  );
}; 
  
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}