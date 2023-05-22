import { NavLink } from "react-router-dom";
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

const App = () => {

  const { t, i18n } = useTranslation();

  return (
    <section id="bg" className="h-screen w-screen lg:flex items-center justify-center bg-black">
      <div className="lg:hidden h-screen py-2 overflow-hidden">
        <Router>
        <div className="mMenu">
            <NavLink to="home">
            Accueil
            </NavLink>
          </div>
          <div className="mMenu">
            <NavLink to="about">
            A propos
            </NavLink>
          </div>        
          <div className="mMenu">
            <NavLink to="projects">
            Projets réalisés
            </NavLink>
          </div>          
          <div className="mMenu pb-3">
            <NavLink to="contact">
            Me contacter
            </NavLink>
          </div>
          <div className="h-full w-full">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </div>
        </Router>
        <div>
        </div>
      </div>
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
          <div className="flex justify-between ">
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ border: i18n.resolvedLanguage === lng ? "white solid 2px" : "", width: "90px", padding: '4px 8px 4px 8px', borderRadius: '10px', backgroundColor: i18n.resolvedLanguage === lng ? '#818cf8' : 'white', fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng as keyof typeof lngs].nativeName}
            </button>
          ))}
        </div>
      </div>
        </div>
        <div className="h-full w-full ">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
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