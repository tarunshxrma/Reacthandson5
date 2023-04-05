import './App.css';
import HOC from './Components/HOC';
import AddBackgroundColor from './Components/AddBackgroundColor';
import ChangeColor from './Components/ChangeColor';
import PureComp from './Components/PureComp';
import NormalComp from './Components/NormalComp';

function App() {
  return (
    <>
      <div><h1>HOC : </h1></div>
      <AddBackgroundColor value={<HOC/>}/>
      <ChangeColor value={<HOC/>}/>
      <div><h1>Normal Component : </h1></div>
      <NormalComp/>
      <div><h1>Pure Component : </h1></div>
      <PureComp/>
    </>
  );
}

export default App;