import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Questionnaire from './Questionnaire';
import Symptom from './Symptom';
import Resources from './Resources';
import ContactUs from './ContactUs';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Questionnaire />
      <Symptom />
      <Resources />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
