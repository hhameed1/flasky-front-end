import './App.css';
import { DogList } from './components/DogList';
import Dog from './components/Dog';

const dogData = [
  {
    name: "Whiskers",
    chipNumber: "13579",
  },
  {
    name: "Fang",
    chipNumber: "82672",
  },
  {
    name: "Beetle",
    chipNumber: "02468",
  },
];

function App() {
  return (
    <main>
      <h1>The Dog Stuff</h1>
      <DogList dogs={dogData}></DogList>
    </main>
  );
}

export default App;
