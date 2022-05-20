
import './App.css';
import { Button } from './components/Button';
import { Links } from './components/Links';
import { Logo } from './components/Logo';


function App() {
  return (
    <div className="App" style={{display:"flex"}}>
    <Logo/>
    <Links/>
    <Button/>
    </div>
  );
}

export default App;