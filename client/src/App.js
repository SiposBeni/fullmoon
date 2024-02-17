import './App.css';
import Footer from './Footer.js';
import Kapcsolat from './Kapcsolat.js';
import KikVagyunk from './KikVagyunk.js';
import Navbar from './Navbar.js';
import Nyitolap from './Kezdolap.js';
import Termekek from './Termekek.js';


function App() {
  return (
    <>
      <Navbar />

      <section id="kezdolap">
        <Nyitolap />
      </section>

      <section id="kikvagyunk">
        <KikVagyunk />
      </section>

      <section id="termekek">
        <Termekek />
      </section>

      <section id="kapcsolat">
        <Kapcsolat />
      </section>

      <Footer />
    </>
  );
}

export default App;
