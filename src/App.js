import './App.css';
import { Footer, Homepage, Navbar, Searchbar } from './components/index.js';

function App() {
  return (
    <div className='bg-neutral-100 App'>
      <Navbar />
      <Searchbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
