import './App.css';
import PollBox from './Component/PollBox';

function App() {

  const data = {
    Vanilla: 17,
    Chocolate: 47,
    Caramel: 32,
    Banana: 28
  } 

  return (
    <div className="App">
      <PollBox data={data}/>
    </div>
  );

}

export default App;
