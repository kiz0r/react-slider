import './App.css';
import Slider from './components/Slider';
import slides from './slides';

function App() {
  return (
    <>
      <Slider slides={slides} />
    </>
  );
}

export default App;
