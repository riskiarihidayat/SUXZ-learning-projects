import './App.css';

import { Navbar, Footer, CTA } from './components';
import { Header, About, Company, Learnings, Testimonial } from './containers';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Learnings />
      <About />
      <Company />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
