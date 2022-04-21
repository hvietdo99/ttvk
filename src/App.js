import './assets/css/style.css';
import './assets/css/responsive.css';
import {
  Footer,
  MainHeader,
  MobileHeader,
  TopHeader,
  Home,
  AboutUs,
  Contact,
  Services
} from './components';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />
        <MainHeader />
        <MobileHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
