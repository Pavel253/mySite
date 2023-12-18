import './App.scss';
import './setting.scss'
// import './variable.scss'
import AboutMe from './Component/AboutMe/AboutMe';
import Header from './Component/Header/Header';
import Skills from './Component/Skills/Skills';
import Works from './Component/Works/Works';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
